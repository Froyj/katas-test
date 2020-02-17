// Vérifier que la valeur passée en paramètre est un tableau, si c'est cas retourner 'true', sinon 'false'

function checkIfArray(value) {
  if (Array.isArray(value)) {
    return true;
  };
  return false
}

// Vérifier que la valeur passée en paramètre est un nombre, si c'est cas retourner 'true', sinon 'false'
function checkIfNumber(value) {
  if (typeof value === 'number') {
    return true;
  };
  return false
}

// Vérifier que la valeur passée en paramètre est un objet , si c'est cas retourner 'true', sinon 'false'
function checkIfObject() {

}

// Vérifier qu'un objet est bien un 

// Vérifier qu'un objet est bien un tableau

// vérifier que la valeur en paramètre est un objet

module.exports = { checkIfArray, checkIfNumber, checkIfObject }