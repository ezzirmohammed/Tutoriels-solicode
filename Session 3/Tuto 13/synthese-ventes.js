let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let nombreventes = ventes.length;
let chiffreaffaires = 0;
let maximum = ventes[0];
let minimum = ventes[0];
let nombreexceptionnelles = 0;
let caexceptionnel = 0;

for (let i = 0; i < ventes.length; i++) {
    chiffreaffaires = chiffreaffaires + ventes[i];

    if (ventes[i] > maximum) {
        maximum = ventes[i];
    }

    if (ventes[i] < minimum) {
        minimum = ventes[i];
    }

    if (ventes[i] >= 130) {
        nombreexceptionnelles++;
        chiffreaffaires = chiffreaffaires + ventes[i];
    }
}
console.log("nombre total de ventes :", nombreventes);
console.log("chiffre d'affaires total :", chiffreaffaires);
console.log("vente maximale :", maximum);
console.log("vente minimale :", minimum);
console.log("nombre de ventes exceptionnelles :", nombreexceptionnelles);
console.log("CA des ventes exceptionnelles :", caexceptionnel);
