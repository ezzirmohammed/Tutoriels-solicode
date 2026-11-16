const prompt = require("prompt-sync")();
let nom = prompt("quel est votre nom ?");
let prénom = prompt("quel est votre prénom ?");
let formation = prompt("quelle est votre formation ?");

console.log("bienvenue", prénom + " " + nom);
console.log("vise le meilleur dans votre formation en", formation + " " + "!");
