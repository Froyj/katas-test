const prettyDpStrEq = require('./helpers');
const charAllFoundAt = require('./charAllFoundAt');

prettyDpStrEq({
  c: [0, 3],
  h: [1],
  o: [2, 4],
  l: [5],
  a: [6],
  t: [7]
}, charAllFoundAt('chocolat'));

prettyDpStrEq({
  a: [0, 3, 5, 7, 10],
  b: [1, 8],
  r: [2, 9],
  c: [4],
  d: [6]
}, charAllFoundAt('abracadabra'));
