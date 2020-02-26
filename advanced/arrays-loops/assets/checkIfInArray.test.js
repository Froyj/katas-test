const assert = require('assert');
const checkIfInArray = require('./checkIfInArray');

assert.strictEqual(checkIfInArray(12, [true, 12, "hello"]), true)