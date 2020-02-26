# Extract a substring

Open the file `.js`{{open}}

The function allCharFoundAt.js takes one word as a string in parameter and must return an object in which : 
- keys refer to the different letters of the word
- values arrays of positions you can find this letter in the word  

Example :
With the following word :
`chocolate`

you must return :

`
{
  c: [0, 3],
  h: [1],
  o: [2, 4],
  l: [5],
  a: [6],
  t: [7]
}
` 

Run `node .test.js`{{execute}} to test your code;