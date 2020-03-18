// à partir d'un tableau d'objets contenant des noms,
// créer un tableau à deux dimensions. Chacun des sous-tableaux
// doit contenir les noms commençant par une certaine lettre.

const { prettyDpStrEq } = require("./helpers");
const sortNamesInLists = require("./sortNamesInList");

prettyDpStrEq(
  [
    ["George Harrison", "Gregory Porter"],
    ["Coldplay"],
    ["Jack Johnson", "Jimi Hendrix", "John Mayer", "Joan Baez"],
    ["Suzanne Vega", "Sting", "Sheryl Crow"],
    ["Eva Cassidy", "Eagles"],
    ["Laura Marling"]
  ],
  sortNamesInLists([
    "George Harrison",
    "Coldplay",
    "Jack Johnson",
    "Jimi Hendrix",
    "Gregory Porter",
    "Suzanne Vega",
    "Eva Cassidy",
    "John Mayer",
    "Sting",
    "Laura Marling",
    "Joan Baez",
    "Sheryl Crow",
    "Eagles"
  ])
);
