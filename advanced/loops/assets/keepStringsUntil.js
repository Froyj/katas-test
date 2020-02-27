const keepStringsUntil = (wordsArray, stopWord) => {
  const result = [];
  let i = 0;
  while (i < wordsArray.length && wordsArray[i] !== stopWord) {
    result.push(wordsArray[i]);
    i++;
  }
  return result;
};

module.exports = keepStringsUntil;