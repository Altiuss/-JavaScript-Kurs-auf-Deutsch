"use strict";

// let auto1 = {
//     marke: "Hyundai",
//     modell: "i30",
//     farbe: "rot"
// };

// let auto2 = {
//     marke: "Ford",
//     modell: "Fiesta ST",
//     farbe: "schwarz"
// };

// let auto3 = {
//     marke: "VW",
//     modell: "Golf GTI",
//     farbe: "blau"
// };

// let autos = [
//     auto1,
//     auto2,
//     auto3
// ];

let autos = [
    {marke: "Hyundai",
        modell: "i30",
        farbe: "rot"},
    {marke: "Ford",
        modell: "Fiesta ST",
        farbe: "schwarz"},
    {marke: "VW",
        modell: "Golf GTI",
        farbe: "blau"}
    ]

console.log(autos);
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);
console.log(autos[2]['modell']);
console.log(autos[2].marke);
console.log(autos[2].marke);

// let waren = [
//     ["Apfel", "Birnen", "Bananen"],
//     ["Mohren", "Sellerie", "Kohl"],
//     ["Graubrot", "Schwarzbrot","Vollkornbrot"]
//     ];

let waren = {
    obst: ["Apfel", "Birnen", "Bananen"],
    gemuse: ["Mohren", "Sellerie", "Kohl"],
    brot: ["Graubrot", "Schwarzbrot","Vollkornbrot"]

};

console.log(waren);
console.log(waren.obst[2]);