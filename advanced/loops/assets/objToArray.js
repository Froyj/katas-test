// à partir d'un objet construire un tableau
const assert = require('assert');

const objToArray = object => {
  const array = [];
  for (let key in object) {
    array.push({ key: key, value: object[key] });
  }
  return array;
}

// const objToArray = object => Object.keys(object)
//   .map(key => ({ key, value: object[key] }));

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