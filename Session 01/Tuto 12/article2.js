const prompt = require("prompt-sync")();
let article = prompt("quel est le nom de l'article ?")
let prix = prompt("quel est le prix de votre article ?")
let quantité = prompt("quel est la quantité de votre produit ?")

let total = prix * quantité

console.log("votre article est :", article)
console.log("votre article coute :", prix)
console.log("la quantité de votre articles est :", quantité)
console.log("le prix total est :", total)
