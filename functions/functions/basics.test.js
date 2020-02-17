const { sayHello } = require('./check-types');

test('checkIfArray', () => {
  expect(checkIfArray([])).toBe(true);
  expect(checkIfArray([0, "yep"])).toBe(true);
  expect(checkIfArray("any word")).toBe(false);
  expect(checkIfArray(true)).toBe(false);
  expect(checkIfArray(23)).toBe(false);
});




