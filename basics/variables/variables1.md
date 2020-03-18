# Creation d'un personnage

Commençons par créer un **personnage** que nous suivrons tout au long de ce chapitre.
Notre personnage comme tout héros, va rencontrer des ennemis, va devoir se battre et potentiellement mourir :'(
Dans un premier temps, le but va être de définir quelques caractéristiques de notre personnage.

Commençons par son nom :

- Ouvre le fichier variables1.js
- Crée la variable **myHeroName** et assigne lui une valeur de type string : son nom.
- Affiche ensuite le contenu de **myHeroName** dans la console.

Nous allons ensuite définir sa puissance d'attaque et un nombre de points de vie

- Crée la variable **attackPower** et assigne lui une valeur de type 10
- Crée la variable **healthPoints** et assigne lui la valeur entière 100
- affiche le contenu des variables **attackPower** et **healthPoints** dans la console

Nous allons également déclarer une variable qui nous permettra de savoir si notre héros est toujours en état de se battre :

- Crée la variable **isOk** et initialise la avec la valeur booléenne `true`
- Affiche la variable **isOk** dans la console.

Pour se battre, notre héros aura besoin d'armes, nous allons lui en fournir quelques unes au moyen d'un tableau (3 armes suffiront)

- Crée un tableau dans lequel chaque arme sera représenté par une chaîne de caractères

Affiche le type de chacune des variables dans la console.

Test ton résultat avec `node variables1`{{execute}}

Tu devrais alors voir les informations suivantes s'afficher dans la console :

<pre class="file">
"nom de ton hero"
10
100
true
</pre>
