// à partir d'un tableau d'objets représentant des personnes, créer
// un objet avec deux clés women et men, et une valeur associée étant le tableau des
// noms des personnes de ce genre.
// (rem: c'est un genre de groupBy customisé)

const { prettyDpStrEq } = require("./helpers");
const menAndWomenNames = require("./menAndWomenNames");

prettyDpStrEq(
  {
    men: ["Curtis Watkins", "Alexander Maddison"],
    women: ["Sylvia McGee", "Amber McKinney", "Lola Whittaker"]
  },
  menAndWomenNames([
    { name: "Curtis Watkins", gender: "male" },
    { name: "Sylvia McGee", gender: "female" },
    { name: "Amber McKinney", gender: "female" },
    { name: "Alexander Maddison", gender: "male" },
    { name: "Lola Whittaker", gender: "female" }
  ])
);
