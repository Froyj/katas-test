const { counter } = require('./iterate-on-array');

test('counter', () => {
  expect(counter(10)).toBe(55);
});