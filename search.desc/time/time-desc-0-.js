searchState.loadedDescShard("time", 0, "Feature flags\nEquivalent to <code>1.days()</code>.\nDate in the proleptic Gregorian calendar.\nA span of time with nanosecond precision.\nContains the error value\nEquivalent to <code>1.hours()</code>.\nThe maximum valid <code>Date</code>.\nThe maximum possible duration. Adding any positive …\nThe largest value that can be represented by …\nA <code>Time</code> that is one nanosecond before midnight. This is the …\nEquivalent to <code>1.microseconds()</code>.\nA <code>Time</code> that is exactly midnight. This is the smallest …\nEquivalent to <code>1.milliseconds()</code>.\nThe minimum valid <code>Date</code>.\nThe minimum possible duration. Adding any negative …\nThe smallest value that can be represented by …\nEquivalent to <code>1.minutes()</code>.\nMonths of the year.\nEquivalent to <code>1.nanoseconds()</code>.\nA <code>PrimitiveDateTime</code> with a <code>UtcOffset</code>.\nContains the success value\nCombined date and time.\nAn alias for [<code>std::result::Result</code>] with a generic error …\nEquivalent to <code>1.seconds()</code>.\nThe clock time within a given date. Nanosecond precision.\nMidnight, 1 January, 1970 (UTC).\nA <code>UtcOffset</code> that is UTC.\nAn offset from UTC.\nEquivalent to <code>1.weeks()</code>.\nDays of the week.\nEquivalent to <code>0.seconds()</code>.\nGet the absolute value of the duration.\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nAdd the sub-day time of the <code>Duration</code> to the <code>Time</code>. Wraps on …\nAdd the sub-day time of the [<code>std::time::Duration</code>] to the …\nPanics\nPanics\nPanics\nPanics\nGet the clock hour, minute, and second.\nGet the clock hour, minute, and second.\nObtain the UTC offset as its hours, minutes, and seconds. …\nGet the clock hour, minute, second, and microsecond.\nGet the clock hour, minute, second, and microsecond.\nGet the clock hour, minute, second, and millisecond.\nGet the clock hour, minute, second, and millisecond.\nGet the clock hour, minute, second, and nanosecond.\nGet the clock hour, minute, second, and nanosecond.\nGet the number of fractional seconds in the duration.\nGet the number of fractional seconds in the duration.\nAssuming that the existing <code>PrimitiveDateTime</code> represents a …\nAssuming that the existing <code>PrimitiveDateTime</code> represents a …\nComputes <code>self + duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self + rhs</code>, returning <code>None</code> if an overflow …\nComputes <code>self + duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self + duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self + duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self / rhs</code>, returning <code>None</code> if <code>rhs == 0</code> or if the …\nComputes <code>self * rhs</code>, returning <code>None</code> if an overflow …\nComputes <code>-self</code>, returning <code>None</code> if the result would …\nCreates a new <code>Duration</code> from the specified number of seconds\nCreates a new <code>Duration</code> from the specified number of seconds\nComputes <code>self - duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self - rhs</code>, returning <code>None</code> if an overflow …\nComputes <code>self - duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self - duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self - duration</code>, returning <code>None</code> if an overflow …\nConvert the <code>OffsetDateTime</code> from the current <code>UtcOffset</code> to …\nConversion between units of time.\nGet the <code>Date</code> in the stored offset.\nGet the <code>Date</code> component of the <code>PrimitiveDateTime</code>.\nGet the day of the month.\nGet the day of the date in the stored offset.\nGet the day of the date.\nCreate a new <code>Duration</code> with the given number of days. …\nVarious error types returned by methods in the time crate.\nExtension traits.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAttempt to create a <code>Date</code> from the year, month, and day.\nAttempt to create a <code>Time</code> from the hour, minute, and second.\nCreate a <code>UtcOffset</code> representing an offset by the number of …\nAttempt to create a <code>Time</code> from the hour, minute, second, …\nAttempt to create a <code>Time</code> from the hour, minute, second, …\nAttempt to create a <code>Time</code> from the hour, minute, second, …\nAttempt to create a <code>Date</code> from the ISO year, week, and …\nCreate a <code>Date</code> from the Julian day.\nAttempt to create a <code>Date</code> from the year and ordinal day …\nCreate an <code>OffsetDateTime</code> from the provided Unix timestamp. …\nConstruct an <code>OffsetDateTime</code> from the provided Unix …\nCreate a <code>UtcOffset</code> representing an offset by the number of …\nGet the clock hour in the stored offset.\nGet the clock hour.\nGet the clock hour.\nCreate a new <code>Duration</code> with the given number of hours. …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck if a duration is negative.\nCheck if the offset is negative, or west of UTC.\nCheck if a duration is positive.\nCheck if the offset is positive, or east of UTC.\nCheck if the offset is exactly UTC.\nCheck if a duration is exactly zero.\nGet the ISO week number.\nGet the ISO week number of the date in the stored offset.\nGet the ISO week number.\nGet the number of days in the month of a given year.\nGet the microseconds within the second in the stored …\nGet the microseconds within the second.\nGet the microseconds within the second.\nCreate a new <code>Duration</code> with the given number of …\nCreate a <code>PrimitiveDateTime</code> using the existing date. The …\nGet the milliseconds within the second in the stored …\nGet the milliseconds within the second.\nGet the milliseconds within the second.\nCreate a new <code>Duration</code> with the given number of …\nGet the minute within the hour in the stored offset.\nGet the minute within the hour.\nGet the minute within the hour.\nCreate a new <code>Duration</code> with the given number of minutes. …\nObtain the number of minutes past the hour the offset is …\nGet the week number where week 1 begins on the first …\nGet the week number where week 1 begins on the first …\nGet the week number where week 1 begins on the first …\nGet the month.\nGet the month of the date in the stored offset.\nGet the month of the date.\nGet the nanoseconds within the second in the stored offset.\nGet the nanoseconds within the second.\nGet the nanoseconds within the second.\nCreate a new <code>Duration</code> with the given number of nanoseconds.\nCreate a new <code>Duration</code> with the provided seconds and …\nCreate a new <code>PrimitiveDateTime</code> from the provided <code>Date</code> and …\nCreate a new <code>OffsetDateTime</code> with the given <code>Date</code>, <code>Time</code>, and …\nCreate a new <code>OffsetDateTime</code> with the given <code>Date</code> and <code>Time</code> …\nGet the next month.\nGet the next weekday.\nGet the next calendar date.\nCalculates the first occurrence of a weekday that is …\nGet n-th next month.\nGet n-th next day.\nCalculates the <code>n</code>th occurrence of a weekday that is …\nGet n-th previous month.\nGet n-th previous day.\nCalculates the <code>n</code>th occurrence of a weekday that is …\nGet the zero-indexed number of days from Monday.\nGet the zero-indexed number of days from Sunday.\nGet the one-indexed number of days from Monday.\nGet the one-indexed number of days from Sunday.\nGet the <code>UtcOffset</code>.\nGet the day of the year.\nGet the day of the year of the date in the stored offset.\nGet the day of the year.\nCalculates the first occurrence of a weekday that is …\nGet the previous month.\nGet the previous weekday.\nGet the previous calendar date.\nReplace the date, which is assumed to be in the stored …\nReplace the date, preserving the time.\nReplace the date and time, which are assumed to be in the …\nReplace the day of the month.\nReplace the day of the month.\nReplace the day of the month.\nReplace the clock hour.\nReplace the clock hour.\nReplace the clock hour.\nReplace the microseconds within the second.\nReplace the microseconds within the second.\nReplace the microseconds within the second.\nReplace the milliseconds within the second.\nReplace the milliseconds within the second.\nReplace the milliseconds within the second.\nReplace the minutes within the hour.\nReplace the minutes within the hour.\nReplace the minutes within the hour.\nReplace the month of the year.\nReplace the month of the year.\nReplace the month of the year.\nReplace the nanoseconds within the second.\nReplace the nanoseconds within the second.\nReplace the nanoseconds within the second.\nReplace the offset. The date and time components remain …\nReplace the day of the year.\nReplace the day of the year.\nReplace the day of the year.\nReplace the seconds within the minute.\nReplace the seconds within the minute.\nReplace the seconds within the minute.\nReplace the time, which is assumed to be in the stored …\nReplace the time, preserving the date.\nReplace the year. The month and day will be unchanged.\nReplace the year. The month and day will be unchanged.\nReplace the year. The month and day will be unchanged.\nComputes <code>self + duration</code>, saturating value on overflow.\nComputes <code>self + rhs</code>, saturating if an overflow occurred.\nComputes <code>self + duration</code>, saturating value on overflow.\nComputes <code>self + duration</code>, saturating value on overflow.\nComputes <code>self * rhs</code>, saturating if an overflow occurred.\nCreates a new <code>Duration</code> from the specified number of seconds\nCreates a new <code>Duration</code> from the specified number of seconds\nComputes <code>self - duration</code>, saturating value on overflow.\nComputes <code>self - rhs</code>, saturating if an overflow occurred.\nComputes <code>self - duration</code>, saturating value on overflow.\nComputes <code>self - duration</code>, saturating value on overflow.\nGet the second within the minute in the stored offset.\nGet the second within the minute.\nGet the second within the minute.\nCreate a new <code>Duration</code> with the given number of seconds.\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nObtain the number of seconds past the minute the offset is …\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nSubtract two <code>Time</code>s, returning the <code>Duration</code> between. This …\nSubtract the sub-day time of the [<code>std::time::Duration</code>] …\nSubtract the sub-day time of the <code>Duration</code> from the <code>Time</code>. …\nPanics\nPanics\nPanics\nPanics\nGet the number of microseconds past the number of whole …\nGet the number of milliseconds past the number of whole …\nGet the number of nanoseconds past the number of whole …\nGet the week number where week 1 begins on the first …\nGet the week number where week 1 begins on the first …\nGet the week number where week 1 begins on the first …\nGet the <code>Time</code> in the stored offset.\nGet the <code>Time</code> component of the <code>PrimitiveDateTime</code>.\nGet the year, month, and day.\nGet the year, month, and day.\nGet the year, month, and day.\nGet the clock hour, minute, and second.\nGet the clock hour, minute, second, and microsecond.\nGet the clock hour, minute, second, and millisecond.\nGet the clock hour, minute, second, and nanosecond.\nGet the ISO 8601 year, week number, and weekday.\nGet the ISO 8601 year, week number, and weekday.\nGet the ISO 8601 year, week number, and weekday.\nGet the Julian day for the date.\nGet the Julian day for the date. The time is not taken …\nGet the Julian day for the date. The time is not taken …\nConvert the <code>OffsetDateTime</code> from the current <code>UtcOffset</code> to …\nGet the year and ordinal day number.\nGet the year and ordinal day number.\nGet the year and ordinal day number.\nGet the Unix timestamp.\nGet the Unix timestamp in nanoseconds.\nConvert the existing <code>Duration</code> to a <code>std::time::Duration</code> and …\nUtility functions, including updating time zone …\nGet the weekday.\nGet the weekday of the date in the stored offset.\nGet the weekday.\nCreate a new <code>Duration</code> with the given number of weeks. …\nGet the number of whole days in the duration.\nGet the number of whole hours in the duration.\nObtain the number of whole hours the offset is from UTC. A …\nGet the number of whole microseconds in the duration.\nGet the number of whole milliseconds in the duration.\nGet the number of whole minutes in the duration.\nObtain the number of whole minutes the offset is from UTC. …\nGet the number of nanoseconds in the duration.\nGet the number of whole seconds in the duration.\nObtain the number of whole seconds the offset is from UTC. …\nGet the number of whole weeks in the duration.\nAttempt to create a <code>PrimitiveDateTime</code> using the existing …\nAttempt to create a <code>PrimitiveDateTime</code> using the existing …\nAttempt to create a <code>PrimitiveDateTime</code> using the existing …\nAttempt to create a <code>PrimitiveDateTime</code> using the existing …\nCreate a <code>PrimitiveDateTime</code> using the existing date and the …\nGet the year of the date.\nGet the year of the date in the stored offset.\nGet the year of the date.\nA unit of time representing exactly one day.\nA unit of time representing exactly one hour.\nA unit of time representing exactly one microsecond.\nA unit of time representing exactly one millisecond.\nA unit of time representing exactly one minute.\nA unit of time representing exactly one nanosecond.\nA unit of time representing exactly one second.\nA unit of time representing exactly one week.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nObtain the number of times <code>Nanosecond</code> can fit into <code>T</code>. If <code>T</code> …\nObtain the number of times <code>Microsecond</code> can fit into <code>T</code>. If <code>T</code>…\nObtain the number of times <code>Millisecond</code> can fit into <code>T</code>. If <code>T</code>…\nObtain the number of times <code>Second</code> can fit into <code>T</code>. If <code>T</code> is …\nObtain the number of times <code>Minute</code> can fit into <code>T</code>. If <code>T</code> is …\nObtain the number of times <code>Hour</code> can fit into <code>T</code>. If <code>T</code> is …\nObtain the number of times <code>Day</code> can fit into <code>T</code>. If <code>T</code> is …\nObtain the number of times <code>Week</code> can fit into <code>T</code>. If <code>T</code> is …\nAn error type indicating that a component provided to a …\nAn error type indicating that a conversion failed because …\nAn error type indicating that a <code>TryFrom</code> call failed …\nA unified error type for anything returned by a method in …\nAn error type indicating that a <code>FromStr</code> call failed …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether the value’s permitted range is conditional, i.e. …\nObtain the name of the component whose value was out of …\nCreate <code>Duration</code>s from numeric literals.\nCreate [<code>std::time::Duration</code>]s from numeric literals.\nCreate a <code>Duration</code> from the number of days.\nCreate a <code>Duration</code> from the number of hours.\nCreate a <code>Duration</code> from the number of microseconds.\nCreate a <code>Duration</code> from the number of milliseconds.\nCreate a <code>Duration</code> from the number of minutes.\nCreate a <code>Duration</code> from the number of nanoseconds.\nCreate a <code>Duration</code> from the number of seconds.\nCreate a [<code>std::time::Duration</code>] from the number of days.\nCreate a [<code>std::time::Duration</code>] from the number of hours.\nCreate a [<code>std::time::Duration</code>] from the number of …\nCreate a [<code>std::time::Duration</code>] from the number of …\nCreate a [<code>std::time::Duration</code>] from the number of minutes.\nCreate a [<code>std::time::Duration</code>] from the number of …\nCreate a [<code>std::time::Duration</code>] from the number of seconds.\nCreate a [<code>std::time::Duration</code>] from the number of weeks.\nCreate a <code>Duration</code> from the number of weeks.\nGet the number of days in the month of a given year.\nGet the number of calendar days in a given year.\nGet the number of days in the month of a given year.\nReturns if the provided year is a leap year in the …\nGet the number of weeks in the ISO year.")