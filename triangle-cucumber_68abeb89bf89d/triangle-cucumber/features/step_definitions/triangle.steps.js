const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('expect');
const triangleType = require('../../triangle');

let a, b, c, result;

Given('the triangle has sides {int}, {int}, and {int}', (sideA, sideB, sideC) => {
  a = sideA;
  b = sideB;
  c = sideC;
});

When('I check the triangle type', () => {
  result = triangleType(a, b, c);
});

Then('the result should be {string}', (expectedType) => {
  expect(result).toBe(expectedType);
});
