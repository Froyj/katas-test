const { checkIfNumber, checkIfArray, checkIfObject } = require('./check-types');

test('checkIfArray', () => {
  expect(checkIfArray([])).toBe(true);
  expect(checkIfArray([0, "yep"])).toBe(true);
  expect(checkIfArray("any word")).toBe(false);
  expect(checkIfArray(true)).toBe(false);
  expect(checkIfArray(23)).toBe(false);
});

test('checkIfNumber', () => {
  expect(checkIfNumber(0)).toBe(true);
  expect(checkIfNumber(null)).toBe(false);
  expect(checkIfNumber(undefined)).toBe(false);
  expect(checkIfNumber("34")).toBe(false);
  expect(checkIfNumber({ name: "John" })).toBe(false);
});

test('checkIfObject', () => {

});

test('checkIfArray', () => {
  expect(checkIfArray()).toBe(false);
});


