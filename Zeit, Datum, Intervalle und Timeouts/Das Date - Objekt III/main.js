"use strict";

let d = new Date();

console.log(d);

// d.toLokaleString([schema [, optionen]])

let de_DE = d.toLocaleString("de-DE");
let en_US = d.toLocaleString("en-US");
console.log(de_DE);
console.log(en_US);

let optionen = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
};
let de_DE_2 = d.toLocaleString("de-DE", optionen);

console.log(de_DE_2)

let de_DE_datum = d.toLocaleDateString("de-DE",{
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    // minute: "2-digit",
    // second: "2-digit",
} );

console.log(de_DE_datum);

let de_DE_zeit = d.toLocaleTimeString("de-DE");

console.log(de_DE_zeit);