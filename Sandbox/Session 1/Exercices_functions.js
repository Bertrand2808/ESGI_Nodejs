/* Premiere fonction */

const Somme = (a, b) => a + b;
console.log("Somme de deux nombres :", Somme(2, 3));

/* Deuxieme fonction */
const plusGrandNombre = (tab) => {
  let max = 0;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }
  return max;
};
console.log("Retour du plus grand nombre d'un tableau : ", plusGrandNombre([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* Troisieme fonction */
const suppVoyelle = (str) => {
  let voyelle = ["a", "e", "i", "o", "u", "y"];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!voyelle.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
};
console.log(suppVoyelle("Bonjour"));

/* Quatrieme fonction */
const triAlphabetAscii = (chaine) => {
  let newChaine= chaine.split("").sort((function(a,b) {
    return a.localeCompare(b);
  })).join("");
  return newChaine;
};
console.log("Tri par ordre alphabétique d'un tableau : ", triAlphabetAscii("B21onzqejOurAa"));

/* Cinquieme fonction */
let chiffre = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
let tabException = ["onze", "douze", "treize", "quatorze", "quinze", "seize"]
let dizaine = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];

const nombreEnLettre = (nombre) => {
  let exception = [11, 12, 13, 14, 15, 16];
  let newChaine = "";
  let unite = nombre%10
  let chiffreDizaine = parseInt(nombre/10)
  if(exception.includes(nombre)){
    newChaine = tabException[nombre-11]
    return newChaine;
  } else {
    newChaine = dizaine[chiffreDizaine] + " " + chiffre[unite];
    return newChaine;
  }
};
console.log("Nombre en lettre : ", nombreEnLettre(99));

/* Sixieme fonction */

const utilisateurs = [
  { name: "Jean", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Paul", age: 35 }
];

const tabObjet = (utilisateurs, property) => {
  let newTab = [];
  for (let i = 0; i < utilisateurs.length; i++) {
    newTab.push(utilisateurs[i][property]);
  }
  return newTab;
};
console.log("Tab objet : ", tabObjet(utilisateurs, "name"));
console.log("Tab objet : ", tabObjet(utilisateurs, "age"));

/* Septieme fonction */

const triDecroissant = (tab) => {
  tab.sort((a, b) => b - a);
  return tab;
};

console.log("Tri décroissant d'un tableau : ", triDecroissant([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* Huitieme fonction */

const voyelleMaj = (chaine) => {
  let voyelle = ["a", "e", "i", "o", "u", "y"];
  let newStr = "";
  for (let i = 0; i < chaine.length; i++) {
    if (voyelle.includes(chaine[i])) {
      newStr += chaine[i].toUpperCase();
    } else {
      newStr += chaine[i];
    }
  }
  return newStr;
};
console.log("Voyelle en majuscule : ", voyelleMaj("informatique"));

/* Neuvieme fonction */
const nbVoyelle = (chaine) => {
  let voyelle = ["a", "e", "i", "o", "u", "y"];
  let nbVoyelle = 0;
  for (let i = 0; i < chaine.length; i++) {
    if (voyelle.includes(chaine[i])) {
      nbVoyelle++;
    }
  }
  return nbVoyelle;
};

console.log("Nombre de voyelle : ", nbVoyelle("developpement"));

/* Dixieme fonction */
const consonneMaj = (chaine) => {
  let voyelle = ["a", "e", "i", "o", "u", "y"];
  let newStr = "";
  for (let i = 0; i < chaine.length; i++) {
    if (!voyelle.includes(chaine[i])) {
      newStr += chaine[i].toUpperCase();
    } else {
      newStr += chaine[i];
    }
  }
  return newStr;
};
console.log("Consonne en majuscule : ", consonneMaj("informatique"));
