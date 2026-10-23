let panier = [15, 42, 5, 89, 12, 50, 8];

let sommetotale = 0;
let nombrechers = 0;
let sommechers = 0;

for (let i = 0; i < panier.length; i++) {
    sommetotale = sommetotale + panier[i];

    if (panier[i] >= 20) {
        nombrechers ++;
        sommechers = sommechers + panier[i];
    }
}

console.log("somme totale :", sommetotale);
console.log("nombre d'articles chers :", nombrechers);
console.log("somme des articles chers :", sommechers);
