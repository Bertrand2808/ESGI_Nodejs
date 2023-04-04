console.log("Hello World!")

/*
Affectation d'une variable
var maVariable = ''
Cette syntaxe est à éviter, priviliégier les syntaxes suivantes:

let uneAutreVariable = '';
const enocreUneAutreVariable = '';

*/

/*----------------- Function ----------- */
/* Toutes ces syntaxes déclarent la même fonction */

function maFunction(params) {
  return params * 2
}

console.log(maFunction(2))

const maFunction = function (params) {
  return params * 2
}

const maFunction = (params) => {
  return params * 2
}

// Ici il n'y a pas d'accolades donc le return est implicite (car il n'y a qu'une seule instruction)
const maFunction = (params) => params * 2
// Ici n'y a qu'un seul paramètre (pas de parenthèses)
const maFunction = (params) => params * 2

/*----------------- Function ----------- */


