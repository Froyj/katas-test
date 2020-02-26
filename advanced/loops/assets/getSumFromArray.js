function getSumFromArray(myArr) {
  let sum = 0
  for (let i = 0; i < myArr.length; i++) {
    sum += myArr[i];
  }
  return sum;
}

module.exports = getSumFromArray;