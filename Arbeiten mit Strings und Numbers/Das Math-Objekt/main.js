"use strict";

console.log(Math);

// Kreisflache berechnen mit Radius
// A = PI * r^2

let a = Math.PI * Math.pow(12, 2);
console.log(a);
let aRound = Math.round(a);
let aRound1 = Math.floor(a);
let aRound2= Math.ceil(a);


console.log(aRound);
console.log(aRound1);
console.log(aRound2);



console.log(a.toFixed(2));
console.log(+a.toFixed(2));
console.log(parseFloat(a.toFixed(2)));
console.log(parseInt(a.toFixed(2)));
console.log();