const nextDate = require("../src/nextDate");

describe("nextDate - full branch coverage", () => {
	// helper to assert formatted output
	const expected = (d, m, y) => `nextDate is ${d},${m},${y}`;

	test("increments a normal middle-of-month date", () => {
		expect(nextDate(15, 6, 2000)).toBe(expected(16, 6, 2000));
	});

	test("increments 30-day month (Apr) from 29 to 30", () => {
		expect(nextDate(29, 4, 2001)).toBe(expected(30, 4, 2001));
	});

	test("rolls over 30-day month (Apr) from 30 to 1, next month", () => {
		expect(nextDate(30, 4, 2001)).toBe(expected(1, 5, 2001));
	});

	test("increments 31-day month (Jul) from 30 to 31", () => {
		expect(nextDate(30, 7, 2001)).toBe(expected(31, 7, 2001));
	});

	test("rolls over 31-day month (Jul) from 31 to 1, next month", () => {
		expect(nextDate(31, 7, 2001)).toBe(expected(1, 8, 2001));
	});

	test("increments December from 30 to 31 (normal year)", () => {
		expect(nextDate(30, 12, 2011)).toBe(expected(31, 12, 2011));
	});

	test("increments December from 30 to 31 (year 2012)", () => {
		expect(nextDate(30, 12, 2012)).toBe(expected(31, 12, 2012));
	});

	test("handles February non-leap year: 27 -> 28 and 28 -> Mar 1", () => {
		expect(nextDate(27, 2, 2001)).toBe(expected(28, 2, 2001));
		expect(nextDate(28, 2, 2001)).toBe(expected(1, 3, 2001));
	});

	test("handles February leap year: 28 -> 29 and 29 -> Mar 1", () => {
		expect(nextDate(28, 2, 2000)).toBe(expected(29, 2, 2000));
		expect(nextDate(29, 2, 2000)).toBe(expected(1, 3, 2000));
	});

	test("invalid February 29 on non-leap year returns error", () => {
		expect(nextDate(29, 2, 2001)).toBe("invalid input date");
	});

	test("invalid February 30+ returns error", () => {
		expect(nextDate(30, 2, 2000)).toBe("invalid input date");
		expect(nextDate(31, 2, 2000)).toBe("invalid input date");
	});

	test("end of year rollover increments year except when year==2012", () => {
		expect(nextDate(31, 12, 2011)).toBe(expected(1, 1, 2012));
		expect(nextDate(31, 12, 2012)).toBe("year 2012 is over");
	});

	test("invalid types return integer error message", () => {
		expect(nextDate(1.5, 1, 2000)).toBe("Value is not an integer");
		expect(nextDate(1, "2", 2000)).toBe("Value is not an integer");
	});

	test("out of range day/month/year messages", () => {
		expect(nextDate(0, 1, 2000)).toBe("day is out of range");
		expect(nextDate(32, 1, 2000)).toBe("day is out of range");
		expect(nextDate(1, 0, 2000)).toBe("month is out of range");
		expect(nextDate(1, 13, 2000)).toBe("month is out of range");
		expect(nextDate(1, 1, 1811)).toBe("year is out of range");
		expect(nextDate(1, 1, 2013)).toBe("year is out of range");
	});
});