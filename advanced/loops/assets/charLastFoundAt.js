const assert = require('assert');

const charLastFoundAt = str => {
  const result = {};
  for (let i = 0 ; i < str.length ; i++) {
    result[str[i]] = i;
  }
  return result;
}

prettyDpStrEq({
  c: 3,
  h: 1,
  o: 4,
  l: 5,
  a: 6,
  t: 7
}, charLastFoundAt('chocolat'));