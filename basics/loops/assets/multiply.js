function multiply(a, b) {
  let result = 0;
  // write your code below this line
  for(let i=1; i<=a; i++) {
    result += b;
  }
  return result
}

const assert = require('assert').strict;
assert.strictEqual(multiply(4, 5), 20, 'bravo');
