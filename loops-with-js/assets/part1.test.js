const { countFrom0To10 } = require('./part1.js');

test('adds 1 + 2 to equal 3', () => {
  expect(countFrom0To10()).toBe("0123456789");
});