// opérateurs de comparaison
let score = 8;
let seuil = 10;
console.log(score > seuil); // changer score à 8 et relancez
console.log(score === seuil);
console.log(score !== seuil);

// stocker un résultat
let estValide = score >= seuil;
console.log(estValide); // changer score à 8 er relancez

// opérateurs logiques
let inscrit = false;
let paiement = false;
let acces = score >= seuil && inscrit === true;
console.log(acces); // changez inscrit à false et relancez

let entree = inscrit === false || paiement === false;
console.log(entree); // changez les deux à false et relancez
