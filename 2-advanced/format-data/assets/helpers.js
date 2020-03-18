const assert = require('assert');
const prettyStrEq = (exp, act, msg) => {
  console.log("\x1b[1m\x1b[31m")
  assert.strictEqual(exp, act, msg)
  console.log("\x1b[32m%s\x1b[0m", "OK // test passed");
}

const prettyDpStrEq = (exp, act, msg) => {
  console.log("\x1b[1m\x1b[31m")
  assert.deepStrictEqual(exp, act, msg)
  console.log("\x1b[32m%s\x1b[0m", "OK // test passed");
}

module.exports = { prettyStrEq, prettyDpStrEq };