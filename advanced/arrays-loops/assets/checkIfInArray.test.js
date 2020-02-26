const assert = require('assert');
const checkIfInArray = require('./checkIfInArray');
console.log("\x1b[1m\x1b[31m")
assert.strictEqual(checkIfInArray(12, [true, 12, "hello"]), true);
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");
