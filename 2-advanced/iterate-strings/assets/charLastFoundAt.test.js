const { prettyDpStrEq } = require('./helpers');
const charLastFoundAt = require('./charLastFoundAt');

prettyDpStrEq({
  c: 3,
  h: 1,
  o: 4,
  l: 5,
  a: 6,
  t: 7
}, charLastFoundAt('chocolat'));
