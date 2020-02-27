// inverser les caractères d'une string

const revertString = str => {
  let output = '';
  for(let i = str.length - 1 ; i >= 0 ; i--) {
    output += str[i];
  }
  return output;
}

module.exports = revertString;