function charAllFoundAt(str) {
  const result = {};
  for (let i = 0 ; i < str.length ; i++) {
    const char = str[i];
    if (result[char] === undefined) {
      result[char] = [i];
    }
    else {
      result[char].push(i);
    }
  }
  return result;
}

module.exports = charAllFoundAt;