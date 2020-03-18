const substr = (string, indexStart, length) => {
  let result = "";
  for (
    let i = indexStart;
    i < string.length && (!length || result.length < length);
    i++
  ) {
    result += string[i];
  }
  return result;
};

module.exports = substr;
