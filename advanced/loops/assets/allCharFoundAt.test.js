const assert = require('assert');
const allCharFoundAt = require('./allCharFoundAt');

assert.deepStrictEqual({
  c: [0, 3],
  h: [1],
  o: [2, 4],
  l: [5],
  a: [6],
  t: [7]
}, allCharFoundAt('chocolat'));

assert.deepStrictEqual({
  a: [0, 3, 5, 7, 10],
  b: [1, 8],
  r: [2, 9],
  c: [4],
  d: [6]
}, allCharFoundAt('abracadabra'));