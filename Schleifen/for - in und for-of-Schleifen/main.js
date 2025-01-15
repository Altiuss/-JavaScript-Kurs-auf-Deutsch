"use strict";

let meinArray = [
    "Peter",
    "Mia",
    "Mark",
];

let meinObjekt = {
    name: "Max",
    vorname: "Musterman",
    alter: 49
};

// console.log(meinArray);
// console.log(meinObjekt);


for (let eigenshsaft in meinArray) {
    console.log(eigenshsaft);
};

for (let eigenshsaft of meinArray) {
    console.log(eigenshsaft);
};



for (let eigenshsaft in meinObjekt) {
    console.log(eigenshsaft);
};

// for (let eigenshsaft of meinObjekt) {
//     console.log(eigenshsaft);
// };

