"use strict";

const multiplizieren = function(a, b = 10) {

    console.log(a);
    console.log(b);
    console.log(a * b);
};

let z1 = 42;
let z2 = 32;

multiplizieren(z1, z2);


const begruessung = function(a, b, c) {

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(`Hallo ${a} ${b} , du bist schon ${c} alt!`);
};

let nahme = "Aigars";
let nachname = "Alutis";
let age = 49;

begruessung(nahme, nachname, age);

const begruessung2 = function(a = "Aigars", b =  "Alutis", c) {

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(`Hallo ${a} ${b} , du bist schon ${c} alt!`);
};

let nahme1 = "Aigars";
let nachname1 = "Alutis";
let age1 = 49;

begruessung2(nahme1, nachname1, age1);
begruessung2(undefined, undefined, age1);