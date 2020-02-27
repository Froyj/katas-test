const { prettyStrEq } = require('./helpers');
const checkIfInArray = require('./checkIfInArray');

prettyStrEq(checkIfInArray(12, [true, 12, "hello"]), true);
