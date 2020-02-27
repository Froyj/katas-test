const assert = require('assert');
const charAllFoundAt = require('./charAllFoundAt');

console.log("\x1b[1m\x1b[31m");
assert.deepStrictEqual({
  c: [0, 3],
  h: [1],
  o: [2, 4],
  l: [5],
  a: [6],
  t: [7]
}, charAllFoundAt('chocolat'));
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");

console.log("\x1b[1m\x1b[31m")
assert.deepStrictEqual({
  a: [0, 3, 5, 7, 10],
  b: [1, 8],
  r: [2, 9],
  c: [4],
  d: [6]
}, charAllFoundAt('abracadabra'));
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");