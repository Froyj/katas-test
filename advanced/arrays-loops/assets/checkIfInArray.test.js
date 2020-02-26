const assert = require('assert');
const checkIfInArray = require('./checkIfInArray');

assert.strictEqual(checkIfInArray(12, [true, 12, "hello"]), true, "loupé");
console.log("\x1b[32m", "OK // test passed");
