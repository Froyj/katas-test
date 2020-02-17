// Vérifier si la valeur passée en paramètre est présente dans un tableau
// Si elle est présente retourner 'true' sinon 'false'
function checkIfInArray(valueToCheck, myArr) {
  for (let i = 0; i < myArr.length; i++) {
    if (valueToCheck === myArr[i]) {
      return true;
    }
  }
  return false
}

// La fonction getSumFromArray doit retourner la somme des valeurs présentes dans le tableau passé en paramètre
function getSumFromArray(myArr) {
  let sum = 0
  for (let i = 0; i < myArr.length; i++) {
    sum += myArr[i];
  }
  return sum;
}

// La fonction getMax doit retourner la plus grande valeur présente dans le tableau
function getMax(myArr) {
  let max = myArr[0];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] > max)
      max = myArr[i];
  }
  return max;
}


module.exports = { checkIfInArray, getSumFromArray, getMax };

