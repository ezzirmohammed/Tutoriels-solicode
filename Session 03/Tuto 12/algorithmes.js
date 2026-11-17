let prenoms = ["ali", "sara", "yassine", "nadia", "karim"];

let recherche = "nadia";
let position = -1;
for (let i = 0; i < prenoms.length; i++) {
    if (prenoms[i] === recherche) {
        position = i;
        break;
    }
}

if (position !== -1) {
    console.log(recherche + " se trouve à l'index " + position);
} else {
    console.log("prénom introuvable");
}


let notes = [12, 17, 9, 14, 18, 11];

let maximum = notes[0];
let minimum = notes[0];

for (let i = 1; i < notes.length; i++) {
    if (notes[i] > maximum) {
        maximum = notes[i];
    }

    if (notes[i] < minimum) {
        minimum = notes[i];
    }
}

console.log("meilleure note :", maximum);
console.log("pire note :", minimum);
