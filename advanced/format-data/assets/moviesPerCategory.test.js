const { prettyDpStrEq } = require('./helpers');
const moviesPerCategory = require('./moviesPerCategory');

prettyDpStrEq({
  fantasy: ['The Wizard of Oz, 1939', 'Willow, 1989', 'Hook, 1991'],
  drama: ['The Godfather, 1972', 'Seven Samurai, 1956'],
  comedy: ['O Brother, Where Art Thou?, 2000', 'Burn After Reading, 2008']
}, moviesPerCategory([
  { title: 'The Godfather', year: 1972, category: 'drama' },
  { title: 'The Wizard of Oz', year: 1939, category: 'fantasy' },
  { title: 'O Brother, Where Art Thou?', year: 2000, category: 'comedy' },
  { title: 'Willow', year: 1989, category: 'fantasy' },
  { title: 'Burn After Reading', year: 2008, category: 'comedy' },
  { title: 'Hook', year: 1991, category: 'fantasy' },
  { title: 'Seven Samurai', year: 1956, category: 'drama' }
]));