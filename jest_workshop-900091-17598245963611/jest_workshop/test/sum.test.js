const sum = require("../src/sum");

describe("Group1", () => {
    test("TC1: adds 1 + 2 to equal 3", () => {
        expect(sum(1,2)).toBe(3);
    });
})

describe("Group2", () => {
    test("TC1: adds 20 + 30 to equal 50", () => {
        expect(sum(20,30)).toBe(50);
    });
    test("TC1: adds 35 + 5 to equal 40", () => {
        expect(sum(35,5)).toBe(40);
    });
})