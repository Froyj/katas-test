function getMax(myArr) {
  let max = myArr[0];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] > max)
      max = myArr[i];
  }
  return max;
}

module.exports = getMax;