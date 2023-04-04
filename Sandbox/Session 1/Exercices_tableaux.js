/* Premier exercice */
let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const affichageTableau = (tableau) => {
  console.log("Eléments du tableau : ");
  tableau.forEach((element) => {
    console.log(element);
  });
};

affichageTableau(tableau);

/* Deuxième exercice */
let jourSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const affichagePremierJour = (jourSemaine) => {
  console.log("Le premier jour de la semaine est : " + jourSemaine[0]);
};
affichagePremierJour(jourSemaine);

/* Troisième exercice */
let nbPair = [2, 4, 6, 8, 10];
const sommeNbPair = (nbPair) => {
  let somme = 0;
  nbPair.forEach((element) => {
    somme += element;
  });
  console.log("La somme des nombres pairs est : " + somme);
};
sommeNbPair(nbPair);

/* Quatrième exercice */
let fruits = ["Pomme", "Poire", "Banane", "Fraise", "Mangue", "Kiwi"];
const affichageFruits = (fruits) => {
  console.log("Les fruits sont : ");
  fruits.forEach((element) => {
    console.log(element);
  });
};
affichageFruits(fruits);

/* Cinquième exercice */
let oiseaux = ["Aigle", "Pigeon", "Corbeau", "Poule", "Pigeon", "Pigeon"];
const rechercheOiseau = (oiseaux, oiseau) => {
  if(oiseaux.includes(oiseau)){
    console.log("L'oiseau " + oiseau + " est présent dans le tableau");
  }
};
rechercheOiseau(oiseaux, "Pigeon");

/* Sixième exercice */

let pays = ["France", "Belgique", "Suisse", "Allemagne", "Italie", "Espagne", "Portugal"];
const triPays = (pays) => {
  console.log("Les pays triés par ordre alphabétique sont : ");
  console.log(pays.sort());
};
triPays(pays);

/* Septième exercice */
let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const troisiemeMois = (mois) => {
  console.log("Le troisième mois de l'année est : " + mois[2]);
};
troisiemeMois(mois);

/* Huitième exercice */

