# For loop : la base

Objectif 1 : manipuler les paramètres de la boucles:
- manipuler la valeur de départ
- manipuler la condition de continuité de la boucle
- manipuler l'incrémentation/décrémentation de la boucle

Tu peux lancer le test via cette commande :

`node /home/loops/exercises/part1.js`{{execute T1}}

`cat /home/loops/exercises/part1.js`{{execute T1}}


<pre class="file" data-filename="app.js" data-target="replace">var http = require('http');
var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

var server = http.createServer(requestListener);
server.listen(3000, function() { console.log("Listening on port 3000")});
</pre>
          

<pre class="file" data-target="clipboard">Test</pre>
          

<pre class="file" data-target="regex???">Test</pre>