const { prettyStrEq } = require('./helpers');
const substring = require('./substring');

prettyStrEq('Script', substring('JavaScript', 4));
prettyStrEq('Scri', substring('JavaScript', 4, 8));
