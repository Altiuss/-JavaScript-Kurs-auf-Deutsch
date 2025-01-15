"use strict";

let obst = [
    "Apfel",
    "Birnen",
    "Bananen"
];

let gemuse = [
    "Mohren",
    "Sellerie",
    "Kohl"
];

let brot = [
    "Graubrot",
    "Schwarzbrot",
    "Vollkornbrot"
];

let waren = [
    obst,
    gemuse,
    brot
];

for (let i = 0; i < waren.length; i++) {
    console.log(waren[i]);
    for (let j = 0; j < waren[i].length; j++) {
        console.log(waren[i][j]);
    };
};