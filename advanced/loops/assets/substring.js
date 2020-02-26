
const substring = (string, indexStart, indexEnd) => {
  let result = '';
  for (let i = indexStart ; i < string.length && (!indexEnd || i < indexEnd) ; i++) {
    result += string[i];
  }
  return result;
}

module.exports = substring
