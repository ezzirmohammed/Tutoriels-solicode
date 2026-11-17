let compteur = 0; 
let somme = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        compteur++;
        somme = somme + i;
    }
}

console.log("nombre de pairs : " + compteur);
console.log("somme des pairs : " + somme);
