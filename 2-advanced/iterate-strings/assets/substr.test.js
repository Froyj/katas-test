// Recoder la fonction substr de JS
const { assertStrEq } = require("./helpers");
const substr = require("./substr");

assertStrEq("is cool", substr("Coding is cool", 7));
assertStrEq("is", substr("Coding is cool", 7, 2));
