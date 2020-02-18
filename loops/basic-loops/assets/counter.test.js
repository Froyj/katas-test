const { counter } = require('./counter');

test('counter', () => {
  expect(counter(10)).toBe(55);
});

test('counterDesc', () => {
  expect(counter(10)).toBe(55);
});