function checkIfInArray(valueToCheck, myArr) {
  for (let i = 0; i < myArr.length; i++) {
    if (valueToCheck === myArr[i]) {
      return true;
    }
  }
  return false
}

module.exports = checkIfInArray;