let nombres = [23, 15, 42, 9, 31, 18, 42, 5];

let maximum = nombres[0];
let minimum = nombres[0];

let positionmax = 0;
let positionmin = 0;

for (let i = 1; i < nombres.length; i++) {

    if (nombres[i] > maximum) {
        maximum = nombres[i];
        positionmax = i;
    }

    if (nombres[i] < minimum) {
        minimum = nombres[i];
        positionmin = i;
    }
}

console.log("maximum :", maximum);
console.log("osition du maximum :", positionmax);

console.log("minimum :", minimum);
console.log("position du minimum :", positionmin);

let recherche = 31;
let position = -1;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === recherche) {
        position = i;
        break;
    }
}

if (position !== -1) {
    console.log(recherche + " trouvé à l'index " + position);
} else {
    console.log("valeur introuvable");
}
