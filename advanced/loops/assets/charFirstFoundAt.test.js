const prettyDpStrEq = require('./helpers');
const charFirstFoundAt = require('./charFirstFoundAt');

prettyDpStrEq({
  c: 0,
  h: 1,
  o: 2,
  l: 5,
  a: 6,
  t: 7
}, charFirstFoundAt('chocolat'));