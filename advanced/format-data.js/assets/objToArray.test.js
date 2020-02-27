const { prettyDpStrEq } = require('./helpers');
const objToArray = require('./objToArray');

prettyDpStrEq([
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

// const objToArray = object => Object.keys(object)
//   .map(key => ({ key, value: object[key] }));

