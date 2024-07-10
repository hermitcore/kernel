//! This module contains Virtio's split virtqueue.
//! See Virito specification v1.1. - 2.6

use alloc::boxed::Box;
use alloc::vec::Vec;
use core::cell::{RefCell, UnsafeCell};
use core::mem::{self, MaybeUninit};
use core::ptr;

#[cfg(not(feature = "pci"))]
use virtio::mmio::NotificationData;
#[cfg(feature = "pci")]
use virtio::pci::NotificationData;
use virtio::{le16, virtq};

#[cfg(not(feature = "pci"))]
use super::super::transport::mmio::{ComCfg, NotifCfg, NotifCtrl};
#[cfg(feature = "pci")]
use super::super::transport::pci::{ComCfg, NotifCfg, NotifCtrl};
use super::error::VirtqError;
use super::{
	BufferElem, BufferToken, BufferTokenSender, BufferType, MemPool, TransferToken, Virtq,
	VirtqPrivate, VqIndex, VqSize,
};
use crate::arch::memory_barrier;
use crate::arch::mm::{paging, VirtAddr};
use crate::mm::device_alloc::DeviceAlloc;

struct DescrRing {
	read_idx: u16,
	token_ring: Box<[Option<Box<TransferToken<virtq::Desc>>>]>,
	mem_pool: MemPool,

	/// Descriptor Tables
	///
	/// # Safety
	///
	/// These tables may only be accessed via volatile operations.
	/// See the corresponding method for a safe wrapper.
	descr_table_cell: Box<UnsafeCell<[MaybeUninit<virtq::Desc>]>, DeviceAlloc>,
	avail_ring_cell: Box<UnsafeCell<virtq::Avail>, DeviceAlloc>,
	used_ring_cell: Box<UnsafeCell<virtq::Used>, DeviceAlloc>,
}

impl DescrRing {
	fn descr_table_mut(&mut self) -> &mut [MaybeUninit<virtq::Desc>] {
		unsafe { &mut *self.descr_table_cell.get() }
	}
	fn avail_ring(&self) -> &virtq::Avail {
		unsafe { &*self.avail_ring_cell.get() }
	}
	fn avail_ring_mut(&mut self) -> &mut virtq::Avail {
		unsafe { &mut *self.avail_ring_cell.get() }
	}
	fn used_ring(&self) -> &virtq::Used {
		unsafe { &*self.used_ring_cell.get() }
	}

	fn push(&mut self, tkn: TransferToken<virtq::Desc>) -> Result<u16, VirtqError> {
		let mut index;
		if let Some(ctrl_desc) = tkn.ctrl_desc.as_ref() {
			let indirect_table_slice_ref = ctrl_desc.as_ref();

			let descriptor = virtq::Desc {
				addr: paging::virt_to_phys(
					VirtAddr::from(indirect_table_slice_ref.as_ptr() as u64),
				)
				.as_u64()
				.into(),
				len: (mem::size_of_val(indirect_table_slice_ref) as u32).into(),
				flags: virtq::DescF::INDIRECT,
				next: 0.into(),
			};

			index = self
				.mem_pool
				.pool
				.borrow_mut()
				.pop()
				.ok_or(VirtqError::NoDescrAvail)?
				.0;
			self.descr_table_mut()[usize::from(index)] = MaybeUninit::new(descriptor);
		} else {
			let send_desc_iter = tkn
				.buff_tkn
				.send_buff
				.iter()
				.map(|elem| (elem, elem.len(), virtq::DescF::empty()));
			let recv_desc_iter = tkn
				.buff_tkn
				.recv_buff
				.iter()
				.map(|elem| (elem, elem.capacity(), virtq::DescF::WRITE));
			let mut rev_all_desc_iter =
				send_desc_iter
					.chain(recv_desc_iter)
					.rev()
					.map(|(mem_descr, len, flags)| virtq::Desc {
						addr: paging::virt_to_phys(VirtAddr::from(mem_descr.addr() as u64))
							.as_u64()
							.into(),
						len: (len as u32).into(),
						flags,
						next: 0.into(),
					});

			// We need to handle the last descriptor (the first for the reversed iterator) specially to not set the next flag.
			{
				// If the [BufferToken] is empty, we panic
				let descriptor = rev_all_desc_iter.next().unwrap();

				index = self
					.mem_pool
					.pool
					.borrow_mut()
					.pop()
					.ok_or(VirtqError::NoDescrAvail)?
					.0;
				self.descr_table_mut()[usize::from(index)] = MaybeUninit::new(descriptor);
			}
			for mut descriptor in rev_all_desc_iter {
				descriptor.flags |= virtq::DescF::NEXT;
				// We have not updated `index` yet, so it is at this point the index of the previous descriptor that had been written.
				descriptor.next = le16::from(index);

				index = self
					.mem_pool
					.pool
					.borrow_mut()
					.pop()
					.ok_or(VirtqError::NoDescrAvail)?
					.0;
				self.descr_table_mut()[usize::from(index)] = MaybeUninit::new(descriptor);
			}
			// At this point, `index` is the index of the last element of the reversed iterator,
			// thus the head of the descriptor chain.
		}

		self.token_ring[usize::from(index)] = Some(Box::new(tkn));

		let len = self.token_ring.len();
		let idx = self.avail_ring_mut().idx.to_ne();
		self.avail_ring_mut().ring_mut(true)[idx as usize % len] = index.into();

		memory_barrier();
		let next_idx = idx.wrapping_add(1);
		self.avail_ring_mut().idx = next_idx.into();

		Ok(next_idx)
	}

	fn poll(&mut self) {
		// We cannot use a simple while loop here because Rust cannot tell that [Self::used_ring_ref],
		// [Self::read_idx] and [Self::token_ring] access separate fields of `self`. For this reason we
		// need to move [Self::used_ring_ref] lines into a separate scope.
		loop {
			let used_elem;
			{
				if self.read_idx == self.used_ring().idx.to_ne() {
					break;
				} else {
					let cur_ring_index = self.read_idx as usize % self.token_ring.len();
					used_elem = self.used_ring().ring()[cur_ring_index];
				}
			}

			let mut tkn = self.token_ring[used_elem.id.to_ne() as usize]
				.take()
				.expect(
					"The buff_id is incorrect or the reference to the TransferToken was misplaced.",
				);

			if !tkn.buff_tkn.recv_buff.is_empty() {
				tkn.buff_tkn
					.set_device_written_len(used_elem.len.to_ne())
					.unwrap();
			}
			if let Some(queue) = tkn.await_queue.take() {
				queue.try_send(tkn.buff_tkn).unwrap()
			}

			let mut id_ret_idx = u16::try_from(used_elem.id.to_ne()).unwrap();
			loop {
				self.mem_pool.ret_id(super::MemDescrId(id_ret_idx));
				let cur_chain_elem =
					unsafe { self.descr_table_mut()[usize::from(id_ret_idx)].assume_init() };
				if cur_chain_elem.flags.contains(virtq::DescF::NEXT) {
					id_ret_idx = cur_chain_elem.next.to_ne();
				} else {
					break;
				}
			}

			memory_barrier();
			self.read_idx = self.read_idx.wrapping_add(1);
		}
	}

	fn drv_enable_notif(&mut self) {
		self.avail_ring_mut()
			.flags
			.remove(virtq::AvailF::NO_INTERRUPT);
	}

	fn drv_disable_notif(&mut self) {
		self.avail_ring_mut()
			.flags
			.insert(virtq::AvailF::NO_INTERRUPT);
	}

	fn dev_is_notif(&self) -> bool {
		!self.used_ring().flags.contains(virtq::UsedF::NO_NOTIFY)
	}
}

/// Virtio's split virtqueue structure
pub struct SplitVq {
	ring: RefCell<DescrRing>,
	size: VqSize,
	index: VqIndex,

	notif_ctrl: NotifCtrl,
}

impl Virtq for SplitVq {
	fn enable_notifs(&self) {
		self.ring.borrow_mut().drv_enable_notif();
	}

	fn disable_notifs(&self) {
		self.ring.borrow_mut().drv_disable_notif();
	}

	fn poll(&self) {
		self.ring.borrow_mut().poll()
	}

	fn dispatch_batch(
		&self,
		_tkns: Vec<(BufferToken, BufferType)>,
		_notif: bool,
	) -> Result<(), VirtqError> {
		unimplemented!();
	}

	fn dispatch_batch_await(
		&self,
		_tkns: Vec<(BufferToken, BufferType)>,
		_await_queue: super::BufferTokenSender,
		_notif: bool,
	) -> Result<(), VirtqError> {
		unimplemented!()
	}

	fn dispatch(
		&self,
		buffer_tkn: BufferToken,
		sender: Option<BufferTokenSender>,
		notif: bool,
		buffer_type: BufferType,
	) -> Result<(), VirtqError> {
		let transfer_tkn = self.transfer_token_from_buffer_token(buffer_tkn, sender, buffer_type);
		let next_idx = self.ring.borrow_mut().push(transfer_tkn)?;

		if notif {
			// TODO: Check whether the splitvirtquue has notifications for specific descriptors
			// I believe it does not.
			unimplemented!();
		}

		if self.ring.borrow().dev_is_notif() {
			let notification_data = NotificationData::new()
				.with_vqn(self.index.0)
				.with_next_idx(next_idx);
			self.notif_ctrl.notify_dev(notification_data);
		}
		Ok(())
	}

	fn index(&self) -> VqIndex {
		self.index
	}

	fn new(
		com_cfg: &mut ComCfg,
		notif_cfg: &NotifCfg,
		size: VqSize,
		index: VqIndex,
		features: virtio::F,
	) -> Result<Self, VirtqError> {
		// Get a handler to the queues configuration area.
		let mut vq_handler = match com_cfg.select_vq(index.into()) {
			Some(handler) => handler,
			None => return Err(VirtqError::QueueNotExisting(index.into())),
		};

		let size = vq_handler.set_vq_size(size.0);

		let descr_table_cell = unsafe {
			core::mem::transmute::<
				Box<[MaybeUninit<virtq::Desc>], DeviceAlloc>,
				Box<UnsafeCell<[MaybeUninit<virtq::Desc>]>, DeviceAlloc>,
			>(Box::new_uninit_slice_in(size.into(), DeviceAlloc))
		};

		let avail_ring_cell = {
			let avail = virtq::Avail::try_new_in(size, true, DeviceAlloc)
				.map_err(|_| VirtqError::AllocationError)?;

			unsafe {
				mem::transmute::<
					Box<virtq::Avail, DeviceAlloc>,
					Box<UnsafeCell<virtq::Avail>, DeviceAlloc>,
				>(avail)
			}
		};

		let used_ring_cell = {
			let used = virtq::Used::try_new_in(size, true, DeviceAlloc)
				.map_err(|_| VirtqError::AllocationError)?;

			unsafe {
				mem::transmute::<
					Box<virtq::Used, DeviceAlloc>,
					Box<UnsafeCell<virtq::Used>, DeviceAlloc>,
				>(used)
			}
		};

		// Provide memory areas of the queues data structures to the device
		vq_handler.set_ring_addr(paging::virt_to_phys(VirtAddr::from(
			ptr::from_ref(descr_table_cell.as_ref()).expose_provenance(),
		)));
		// As usize is safe here, as the *mut EventSuppr raw pointer is a thin pointer of size usize
		vq_handler.set_drv_ctrl_addr(paging::virt_to_phys(VirtAddr::from(
			ptr::from_ref(avail_ring_cell.as_ref()).expose_provenance(),
		)));
		vq_handler.set_dev_ctrl_addr(paging::virt_to_phys(VirtAddr::from(
			ptr::from_ref(used_ring_cell.as_ref()).expose_provenance(),
		)));

		let descr_ring = DescrRing {
			read_idx: 0,
			token_ring: core::iter::repeat_with(|| None)
				.take(size.into())
				.collect::<Vec<_>>()
				.into_boxed_slice(),
			mem_pool: MemPool::new(size),

			descr_table_cell,
			avail_ring_cell,
			used_ring_cell,
		};

		let mut notif_ctrl = NotifCtrl::new(notif_cfg.notification_location(&mut vq_handler));

		if features.contains(virtio::F::NOTIFICATION_DATA) {
			notif_ctrl.enable_notif_data();
		}

		vq_handler.enable_queue();

		info!("Created SplitVq: idx={}, size={}", index.0, size);

		Ok(SplitVq {
			ring: RefCell::new(descr_ring),
			notif_ctrl,
			size: VqSize(size),
			index,
		})
	}

	fn size(&self) -> VqSize {
		self.size
	}
}

impl VirtqPrivate for SplitVq {
	type Descriptor = virtq::Desc;
	fn create_indirect_ctrl(
		&self,
		send: &[BufferElem],
		recv: &[BufferElem],
	) -> Result<Box<[Self::Descriptor]>, VirtqError> {
		let send_desc_iter = send
			.iter()
			.map(|elem| (elem, elem.len(), virtq::DescF::empty()));
		let recv_desc_iter = recv
			.iter()
			.map(|elem| (elem, elem.capacity(), virtq::DescF::WRITE));
		let all_desc_iter = send_desc_iter.chain(recv_desc_iter).zip(1u16..).map(
			|((mem_descr, len, incomplete_flags), next_idx)| virtq::Desc {
				addr: paging::virt_to_phys(VirtAddr::from(mem_descr.addr() as u64))
					.as_u64()
					.into(),
				len: (len as u32).into(),
				flags: incomplete_flags | virtq::DescF::NEXT,
				next: next_idx.into(),
			},
		);

		let mut indirect_table: Vec<_> = all_desc_iter.collect();
		let last_desc = indirect_table
			.last_mut()
			.ok_or(VirtqError::BufferNotSpecified)?;
		last_desc.flags -= virtq::DescF::NEXT;
		last_desc.next = 0.into();
		Ok(indirect_table.into_boxed_slice())
	}
}
