const moviesPerCategory = moviesArray => {
  const result = {};
  for (let i = 0 ; i < moviesArray.length ; i++) {
    const movie = moviesArray[i];
    if (!(movie.category in result)) {
      result[movie.category] = [`${movie.title}, ${movie.year}`];
    }
    else {
      result[movie.category].push(`${movie.title}, ${movie.year}`);
    }
  }
  return result;
}

module.exports = moviesPerCategory;