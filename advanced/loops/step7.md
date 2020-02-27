# Build an object from a word

Open the file `charFirstFoundAt.js`{{open}}

The function charFirstFoundAt.js takes one word as a string in parameter and must return an object in which : 
- keys refer to the different letters of the word
- values refer to the first position the letter is found at in the word  

Example :
With the following word :
`chocolate`

you must return :

`
{
  c: 0,
  h: 1,
  o: 2,
  l: 5,
  a: 6,
  t: 7
}
` 

Run `node charFirstFoundAt.test.js`{{execute}} to test your code;