(function() {
    var type_impls = Object.fromEntries([["smoltcp",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RingBuffer%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#26\">Source</a><a href=\"#impl-Debug-for-RingBuffer%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"smoltcp/storage/struct.RingBuffer.html\" title=\"struct smoltcp::storage::RingBuffer\">RingBuffer</a>&lt;'a, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#26\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","smoltcp::socket::tcp::SocketBuffer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CManagedSlice%3C'a,+T%3E%3E-for-RingBuffer%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#404-408\">Source</a><a href=\"#impl-From%3CManagedSlice%3C'a,+T%3E%3E-for-RingBuffer%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"managed/slice/enum.ManagedSlice.html\" title=\"enum managed::slice::ManagedSlice\">ManagedSlice</a>&lt;'a, T&gt;&gt; for <a class=\"struct\" href=\"smoltcp/storage/struct.RingBuffer.html\" title=\"struct smoltcp::storage::RingBuffer\">RingBuffer</a>&lt;'a, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#405-407\">Source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(slice: <a class=\"enum\" href=\"managed/slice/enum.ManagedSlice.html\" title=\"enum managed::slice::ManagedSlice\">ManagedSlice</a>&lt;'a, T&gt;) -&gt; <a class=\"struct\" href=\"smoltcp/storage/struct.RingBuffer.html\" title=\"struct smoltcp::storage::RingBuffer\">RingBuffer</a>&lt;'a, T&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<ManagedSlice<'a, T>>","smoltcp::socket::tcp::SocketBuffer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RingBuffer%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#116-170\">Source</a><a href=\"#impl-RingBuffer%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: 'a&gt; <a class=\"struct\" href=\"smoltcp/storage/struct.RingBuffer.html\" title=\"struct smoltcp::storage::RingBuffer\">RingBuffer</a>&lt;'a, T&gt;</h3><div class=\"docblock\"><p>This is the “discrete” ring buffer interface: it operates with single elements,\nand boundary conditions (empty/full) are errors.</p>\n</div></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.enqueue_one_with\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#119-133\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.enqueue_one_with\" class=\"fn\">enqueue_one_with</a>&lt;'b, R, E, F&gt;(\n    &amp;'b mut self,\n    f: F,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, E&gt;, <a class=\"struct\" href=\"smoltcp/storage/struct.Full.html\" title=\"struct smoltcp::storage::Full\">Full</a>&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'b mut T</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, E&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Call <code>f</code> with a single buffer element, and enqueue the element if <code>f</code>\nreturns successfully, or return <code>Err(Full)</code> if the buffer is full.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.enqueue_one\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#139-141\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.enqueue_one\" class=\"fn\">enqueue_one</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;mut T</a>, <a class=\"struct\" href=\"smoltcp/storage/struct.Full.html\" title=\"struct smoltcp::storage::Full\">Full</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Enqueue a single element into the buffer, and return a reference to it,\nor return <code>Err(Full)</code> if the buffer is full.</p>\n<p>This function is a shortcut for <code>ring_buf.enqueue_one_with(Ok)</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dequeue_one_with\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#145-161\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.dequeue_one_with\" class=\"fn\">dequeue_one_with</a>&lt;'b, R, E, F&gt;(\n    &amp;'b mut self,\n    f: F,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, E&gt;, <a class=\"struct\" href=\"smoltcp/storage/struct.Empty.html\" title=\"struct smoltcp::storage::Empty\">Empty</a>&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'b mut T</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, E&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Call <code>f</code> with a single buffer element, and dequeue the element if <code>f</code>\nreturns successfully, or return <code>Err(Empty)</code> if the buffer is empty.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dequeue_one\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#167-169\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.dequeue_one\" class=\"fn\">dequeue_one</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;mut T</a>, <a class=\"struct\" href=\"smoltcp/storage/struct.Empty.html\" title=\"struct smoltcp::storage::Empty\">Empty</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Dequeue an element from the buffer, and return a reference to it,\nor return <code>Err(Empty)</code> if the buffer is empty.</p>\n<p>This function is a shortcut for <code>ring_buf.dequeue_one_with(Ok)</code>.</p>\n</div></details></div></details>",0,"smoltcp::socket::tcp::SocketBuffer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RingBuffer%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#174-289\">Source</a><a href=\"#impl-RingBuffer%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: 'a&gt; <a class=\"struct\" href=\"smoltcp/storage/struct.RingBuffer.html\" title=\"struct smoltcp::storage::RingBuffer\">RingBuffer</a>&lt;'a, T&gt;</h3><div class=\"docblock\"><p>This is the “continuous” ring buffer interface: it operates with element slices,\nand boundary conditions (empty/full) simply result in empty slices.</p>\n</div></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.enqueue_many_with\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#181-197\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.enqueue_many_with\" class=\"fn\">enqueue_many_with</a>&lt;'b, R, F&gt;(&amp;'b mut self, f: F) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, R)<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;'b mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a>) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, R),</div></h4></section></summary><div class=\"docblock\"><p>Call <code>f</code> with the largest contiguous slice of unallocated buffer elements,\nand enqueue the amount of elements returned by <code>f</code>.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>This function panics if the amount of elements returned by <code>f</code> is larger\nthan the size of the slice passed into it.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.enqueue_many\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#205-211\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.enqueue_many\" class=\"fn\">enqueue_many</a>(&amp;mut self, size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>) -&gt; &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a></h4></section></summary><div class=\"docblock\"><p>Enqueue a slice of elements up to the given size into the buffer,\nand return a reference to them.</p>\n<p>This function may return a slice smaller than the given size\nif the free space in the buffer is not contiguous.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.enqueue_slice\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#216-231\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.enqueue_slice\" class=\"fn\">enqueue_slice</a>(&amp;mut self, data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h4></section></summary><div class=\"docblock\"><p>Enqueue as many elements from the given slice into the buffer as possible,\nand return the amount of elements that could fit.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dequeue_many_with\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#239-254\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.dequeue_many_with\" class=\"fn\">dequeue_many_with</a>&lt;'b, R, F&gt;(&amp;'b mut self, f: F) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, R)<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;'b mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a>) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, R),</div></h4></section></summary><div class=\"docblock\"><p>Call <code>f</code> with the largest contiguous slice of allocated buffer elements,\nand dequeue the amount of elements returned by <code>f</code>.</p>\n<h5 id=\"panics-1\"><a class=\"doc-anchor\" href=\"#panics-1\">§</a>Panics</h5>\n<p>This function panics if the amount of elements returned by <code>f</code> is larger\nthan the size of the slice passed into it.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dequeue_many\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#262-268\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.dequeue_many\" class=\"fn\">dequeue_many</a>(&amp;mut self, size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>) -&gt; &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a></h4></section></summary><div class=\"docblock\"><p>Dequeue a slice of elements up to the given size from the buffer,\nand return a reference to them.</p>\n<p>This function may return a slice smaller than the given size\nif the allocated space in the buffer is not contiguous.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dequeue_slice\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#273-288\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.dequeue_slice\" class=\"fn\">dequeue_slice</a>(&amp;mut self, data: &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h4></section></summary><div class=\"docblock\"><p>Dequeue as many elements from the buffer into the given slice as possible,\nand return the amount of elements that could fit.</p>\n</div></details></div></details>",0,"smoltcp::socket::tcp::SocketBuffer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RingBuffer%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#293-402\">Source</a><a href=\"#impl-RingBuffer%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: 'a&gt; <a class=\"struct\" href=\"smoltcp/storage/struct.RingBuffer.html\" title=\"struct smoltcp::storage::RingBuffer\">RingBuffer</a>&lt;'a, T&gt;</h3><div class=\"docblock\"><p>This is the “random access” ring buffer interface: it operates with element slices,\nand allows to access elements of the buffer that are not adjacent to its head or tail.</p>\n</div></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_unallocated\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#297-315\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.get_unallocated\" class=\"fn\">get_unallocated</a>(&amp;mut self, offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>) -&gt; &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a></h4></section></summary><div class=\"docblock\"><p>Return the largest contiguous slice of unallocated buffer elements starting\nat the given offset past the last allocated element, and up to the given size.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_unallocated\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#321-338\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.write_unallocated\" class=\"fn\">write_unallocated</a>(&amp;mut self, offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h4></section></summary><div class=\"docblock\"><p>Write as many elements from the given slice into unallocated buffer elements\nstarting at the given offset past the last allocated element, and return\nthe amount written.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.enqueue_unallocated\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#344-347\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.enqueue_unallocated\" class=\"fn\">enqueue_unallocated</a>(&amp;mut self, count: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>)</h4></section></summary><div class=\"docblock\"><p>Enqueue the given number of unallocated buffer elements.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>Panics if the number of elements given exceeds the number of unallocated elements.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_allocated\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#352-370\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.get_allocated\" class=\"fn\">get_allocated</a>(&amp;self, offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a></h4></section></summary><div class=\"docblock\"><p>Return the largest contiguous slice of allocated buffer elements starting\nat the given offset past the first allocated element, and up to the given size.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_allocated\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#376-391\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.read_allocated\" class=\"fn\">read_allocated</a>(&amp;mut self, offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>, data: &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.slice.html\">[T]</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h4></section></summary><div class=\"docblock\"><p>Read as many elements from allocated buffer elements into the given slice\nstarting at the given offset past the first allocated element, and return\nthe amount read.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dequeue_allocated\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#397-401\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.dequeue_allocated\" class=\"fn\">dequeue_allocated</a>(&amp;mut self, count: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>)</h4></section></summary><div class=\"docblock\"><p>Dequeue the given number of allocated buffer elements.</p>\n<h5 id=\"panics-1\"><a class=\"doc-anchor\" href=\"#panics-1\">§</a>Panics</h5>\n<p>Panics if the number of elements given exceeds the number of allocated elements.</p>\n</div></details></div></details>",0,"smoltcp::socket::tcp::SocketBuffer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RingBuffer%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#33-112\">Source</a><a href=\"#impl-RingBuffer%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: 'a&gt; <a class=\"struct\" href=\"smoltcp/storage/struct.RingBuffer.html\" title=\"struct smoltcp::storage::RingBuffer\">RingBuffer</a>&lt;'a, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#37-46\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.new\" class=\"fn\">new</a>&lt;S&gt;(storage: S) -&gt; <a class=\"struct\" href=\"smoltcp/storage/struct.RingBuffer.html\" title=\"struct smoltcp::storage::RingBuffer\">RingBuffer</a>&lt;'a, T&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"managed/slice/enum.ManagedSlice.html\" title=\"enum managed::slice::ManagedSlice\">ManagedSlice</a>&lt;'a, T&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Create a ring buffer with the given storage.</p>\n<p>During creation, every element in <code>storage</code> is reset.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#49-52\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.clear\" class=\"fn\">clear</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Clear the ring buffer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.capacity\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#55-57\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.capacity\" class=\"fn\">capacity</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Return the maximum number of elements in the ring buffer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#60-68\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.reset\" class=\"fn\">reset</a>(&amp;mut self)<div class=\"where\">where\n    T: <a class=\"trait\" href=\"smoltcp/storage/trait.Resettable.html\" title=\"trait smoltcp::storage::Resettable\">Resettable</a>,</div></h4></section></summary><div class=\"docblock\"><p>Clear the ring buffer, and reset every element.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#71-73\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Return the current number of elements in the ring buffer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.window\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#76-78\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.window\" class=\"fn\">window</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Return the number of elements that can be added to the ring buffer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.contiguous_window\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#82-84\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.contiguous_window\" class=\"fn\">contiguous_window</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Return the largest number of elements that can be added to the buffer\nwithout wrapping around (i.e. in a single <code>enqueue_many</code> call).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#87-89\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Query whether the buffer is empty.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_full\" class=\"method\"><a class=\"src rightside\" href=\"src/smoltcp/storage/ring_buffer.rs.html#92-94\">Source</a><h4 class=\"code-header\">pub fn <a href=\"smoltcp/storage/struct.RingBuffer.html#tymethod.is_full\" class=\"fn\">is_full</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Query whether the buffer is full.</p>\n</div></details></div></details>",0,"smoltcp::socket::tcp::SocketBuffer"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[28963]}