const prettyStrEq = require('./helpers');
const getSumFromArray = require('./getSumFromArray');

prettyStrEq(getSumFromArray([32, 12, 0, 5, -4]), 45);
