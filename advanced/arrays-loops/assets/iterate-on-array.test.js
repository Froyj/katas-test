const { checkIfInArray, getSumFromArray, getMax } = require('./iterate-on-array');

test('checkIfInArray', () => {
  const myArray = [1, 3, "hello", false];
  expect(checkIfInArray(1, myArray)).toBe(true);
  expect(checkIfInArray("no", myArray)).toBe(false);
  expect(checkIfInArray(false, myArray)).toBe(true);
  expect(checkIfInArray("hello", myArray)).toBe(true);
  expect(checkIfInArray(5, myArray)).toBe(false);
});

test('getSumFromArray', () => {
  expect(getSumFromArray([0, 12.5, 7, 234, -10])).toBe(243.5);
});

test('getMax', () => {
  const myArray = [0, 12.5, 7, 234, -10]
  expect(getMax([0, 12.5, 7, 234, -10])).toBe(234);
  expect(getMax([-12.5, -7, -234, -10])).toBe(-7);
});

// test('', () => {
//   const myArray = [0, 12.5, 7, 234, -10]
//   expect(getMax([0, 12.5, 7, 234, -10])).toBe(234);
//   expect(getMax([-12.5, -7, -234, -10])).toBe(-7);
// });

