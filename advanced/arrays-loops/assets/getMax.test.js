const assert = require('assert');
const getMax = require('./getMax');

console.log("\x1b[1m\x1b[31m")
assert.strictEqual(getMax([32, 12, 0, 5, -4]), true, error.message);
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");
