"use strict";

const multiplicieren = function(a, b) {
    return a * b;
};


let z1 = 13;
let z2 = 111;

let ergebnis = multiplicieren(z1, z2);

console.log(ergebnis);

let ergebnis2 = multiplicieren(ergebnis, ergebnis);

let ergebnis3 = multiplicieren(multiplicieren(z1, z2), multiplicieren(z1, z2));

console.log(ergebnis2);

console.log(ergebnis3);