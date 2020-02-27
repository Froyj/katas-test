// Garder les chaînes d'un tableau jusqu'à trouver une avec un certain nom
// Deux façons:
// - return si trouve avec un nom,
// - indexOf puis slice

const { prettyDpStrEq } = require('./helpers');
const keepStringsUntil = require('./keepStringsUntil');

prettyDpStrEq(
  ['I', 'should', 'not', 'go', 'beyond'],
  keepStringsUntil(['I', 'should', 'not', 'go', 'beyond', 'that', 'word'], 'that')
);