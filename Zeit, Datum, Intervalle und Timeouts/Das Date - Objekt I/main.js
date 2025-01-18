"use strict";

let d = new Date();

console.log(d);

Date.now();

console.log(Date.now());

let count = 0;

function repeat() {
    console.log(Date.now());
    count++;
    if (count < 5) { // Nosacījums, cik ilgi cikls atkārtojas
        setTimeout(repeat, 5000); // Atkārto ik pēc 2 sekundēm
    } else {
        console.log("Your time is endet")
    }
}

repeat();

let e = new Date(1787202130699);
console.log(e);

let f = new Date("Thu Aug 20 2006 07:02:10 GMT+0200");
console.log(f);

// new Date(jahr, monats-index[, tag[, minute[, sekunde[, milisekunde]]]])

let g = new Date(2012, 5, 23, 15, 15, 34, 111);
console.log(g);