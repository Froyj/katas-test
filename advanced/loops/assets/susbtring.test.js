const assert = require('assert');
const substring = require('./substring');

console.log("\x1b[1m\x1b[31m")
assert.strictEqual('Script', substring('JavaScript', 4));
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");

console.log("\x1b[1m\x1b[31m")
assert.strictEqual('Scri', substring('JavaScript', 4, 8));
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");