// à partir d'un objet construire un tableau

const objToArray = object => {
  const array = [];
  for (let key in object) {
    array.push({ key: key, value: object[key] });
  }
  return array;
}
