const TriangleCalculator = require("../src/triangle");
const sum = require("../src/triangle");

test("100 100 100",() => {
    expect(TriangleCalculator(100,100,100)).toBe("Equilateral")
});
