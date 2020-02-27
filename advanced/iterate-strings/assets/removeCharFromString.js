const removeCharFromString = (string, char) => {
  let result = '';
  for (let i = 0 ; i < string.length ; i++) {
    if (string[i] !== char) {
      result += string[i];
    }
  }
  return result;
}

module.exports = removeCharFromString;