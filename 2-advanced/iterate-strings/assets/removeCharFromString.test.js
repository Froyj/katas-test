const prettyDpStrEq = require('./helpers');
const removeCharFromString = require('./removeCharFromString');

prettyDpStrEq(
  'This message was seriously messed up',
  removeCharFromString('Tzhziszz zzzmeszsazgze zwzasz szezrizozuslzy mzeszszzezzdz zzuzp', 'z')
);