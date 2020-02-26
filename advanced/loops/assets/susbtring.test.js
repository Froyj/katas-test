const assert = require('assert');
const substring = require('./substring');

assert.strictEqual('Script', substring('JavaScript', 4));
assert.strictEqual('Scri', substring('JavaScript', 4, 8));