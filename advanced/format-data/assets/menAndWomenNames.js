// à partir d'un tableau d'objets représentant des personnes, créer
// un objet avec deux clés women et men, et une valeur associée étant le tableau des
// noms des personnes de ce genre.
// (rem: c'est un genre de groupBy customisé)

const menAndWomenNames = personsArray => {
  const result = { men: [], women: [] };
  for (let i = 0 ; i < personsArray.length ; i++) {
    const person = personsArray[i];
    if (person.gender === 'female') {
      result.women.push(person.name);
    }
    else {
      result.men.push(person.name);
    } 
  }
  return result;
}

module.exports = menAndWomenNames;

