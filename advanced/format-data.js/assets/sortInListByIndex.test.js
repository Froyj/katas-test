// Construire un tableau à 2d à partir d'un tableau 1d,
// en plaçant dans chacun les éléments en fonction de leur index pair ou impair
// d'origine dans le tableau
const { prettyDpStrEq } = require("./helpers");
const sortInListsByIndex = require("./sortInListByIndex");

prettyDpStrEq(
  [
    ["C'est", "moins", "comme"],
    ["beaucoup", "lisible", "ça !"]
  ],
  sortInListsByIndex(["C'est", "beaucoup", "moins", "lisible", "comme", "ça !"])
);
