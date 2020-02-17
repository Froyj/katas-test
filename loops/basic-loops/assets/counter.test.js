const { counter } = require('./counter');

test('counter', () => {
  expect(counter(10)).toBe(55);
});