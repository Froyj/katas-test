const test = require('ava');
const { counter, counterDesc, findIfTidy, getLetterOccurences } = require('./counter');

test('counter', t => {
  const expected = 55
  const actual = counter(10)
  t.is(expected, actual);
});

// test('counterDesc', () => {
//   expect(counter(10)).toBe(55);
// });

// test('findIfTidy', () => {
//   expect(counter(10)).toBe(55);
// });

// test('getLetterOccurences', () => {
//   expect(counter(10)).toBe(55);
// });
