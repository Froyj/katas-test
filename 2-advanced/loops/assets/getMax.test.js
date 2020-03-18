const { prettyStrEq } = require('./helpers');
const getMax = require('./getMax');

prettyStrEq(getMax([32, 12, 0, 5, -4]), 32);
