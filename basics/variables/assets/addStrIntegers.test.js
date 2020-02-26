const assert = require('assert');
const addStrIntegers = require('./addStrIntegers');

console.log("\x1b[1m\x1b[31m")
assert.strictEqual(addStrIntegers('-12', '14'), 2);
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");
