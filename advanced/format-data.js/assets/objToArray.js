const objToArray = object => {
  const array = [];
  for (let key in object) {
    array.push({ key: key, value: object[key] });
  }
  return array;
}

module.exports = objToArray;
