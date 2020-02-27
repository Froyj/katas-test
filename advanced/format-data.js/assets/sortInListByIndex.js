const sortInListsByIndex = array => {
  const result = [[], []];
  for (let i = 0 ; i < array.length ; i++) {
    result[i % 2].push(array[i]);
  }
  return result;
}

module.exports = sortInListsByIndex;