const charLastFoundAt = str => {
  const result = {};
  for (let i = 0 ; i < str.length ; i++) {
    result[str[i]] = i;
  }
  return result;
}
