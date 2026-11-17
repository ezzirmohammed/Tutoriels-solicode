let a = 100;
let b = 200;
let c = 300;

console.log("avant :", a, b, c);

let temp = a;
a = b;
b = temp; 

console.log("après :", a, b, c);
