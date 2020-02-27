const assert = require('assert');
const charFirstFoundAt = require('./charFirstFoundAt');

console.log("\x1b[1m\x1b[31m")
assert.deepStrictEqual({
  c: 0,
  h: 1,
  o: 2,
  l: 5,
  a: 6,
  t: 7
}, charFirstFoundAt('chocolat'));
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");