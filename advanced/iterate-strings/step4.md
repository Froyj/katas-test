# Build an object from a word

Open the file `charLastFoundAt.js`{{open}}

The function charLastFoundAt.js takes one word as a string in parameter and must return an object in which : 
- keys refer to the different letters of the word
- values refer to the last position the letter is found at in the word  

Example :
With the following word :
`chocolate`

you must return :

`
{
  c: 3,
  h: 1,
  o: 4,
  l: 5,
  a: 6,
  t: 7,
  e: 8
}
` 

Run `node charLastFoundAt.test.js`{{execute}} to test your code;