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

