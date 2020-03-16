const assert = require('assert');
const getType = require('./getType');

console.log("\x1b[1m\x1b[31m")
assert.strictEqual(getType(4.15), 'number');
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");

console.log("\x1b[1m\x1b[31m")
assert.strictEqual(getType("Hello"), 'string');
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");
