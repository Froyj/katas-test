const assert = require('assert');
const getSumFromArray = require('./getSumFromArray');

console.log("\x1b[1m\x1b[31m")
assert.strictEqual(getSumFromArray([32, 12, 0, 5, -4]), 45);
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");
