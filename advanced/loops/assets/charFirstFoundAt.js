const charFirstFoundAt = str => {
  const result = {};
  for (let i = 0 ; i < str.length ; i++) {
    const char = str[i];
    if (result[char] === undefined) {
      result[char] = i;
    }
  }
  return result;
}

module.exports = charFirstFoundAt;