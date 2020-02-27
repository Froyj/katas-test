const sortNamesInLists = namesArray => {
  const result = [];
  const indicesByLetter = {};
  for (let name of namesArray) {
    const firstLetter = name[0].toLowerCase();
    if (!(firstLetter in indicesByLetter)) {
      indicesByLetter[firstLetter] = result.length;
      result.push([name]);
    } else {
      const index = indicesByLetter[firstLetter];
      result[index].push(name);
    }
  }
  return result;
};

module.exports = sortNamesInLists;
