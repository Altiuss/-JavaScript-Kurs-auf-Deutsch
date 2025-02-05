"use strict";

// Fur Funktionen
let meinen_zahlen = [44, 51, 36];

const addieren = function(a, b, c) {
    console.log(a + b + c);
}

// addieren(meinen_zahlen[0], meinen_zahlen[1], meinen_zahlen[2]);

addieren(...meinen_zahlen);

// Fur Arrays

let kleines_array = ["Apfel", "Banane", "Kiwi"];
let grosses_array = [...kleines_array, "Orange", "Weintraube"];
console.log(grosses_array);

// Fur Objekte

let kleine_objekt ={
    name: "Ein objekt", 
    grosse: 2,
    objekt: true
};

let grosses_objekt = {
    ...kleine_objekt,
    betreff: "Spread-Syntax",
    datum: new Date(),
    grosse: 3
};

console.log(grosses_objekt);

// fur Instanzen von Objekten


let datum = new Date();
let datumswerte = [2020, 5, 14];
console.log(datum);
let datum1 = new Date(...datumswerte);
console.log(datum1);