const assert = require('assert');
const objToArray = require('./objToArray');

console.log("\x1b[1m\x1b[31m")
assert.deepStrictEqual([
  { key: 'firstName', value: 'Homer' },
  { key: 'lastName', value: 'Simpson' },
  { key: 'city', value: 'Springfield' },
  { key: 'job', value: 'Nuclear Safety Inspector' }
], objToArray({
  firstName: 'Homer',
  lastName: 'Simpson',
  city: 'Springfield',
  job: 'Nuclear Safety Inspector'
}));
console.log("\x1b[32m%s\x1b[0m", "OK // test passed");



// const objToArray = object => Object.keys(object)
//   .map(key => ({ key, value: object[key] }));

