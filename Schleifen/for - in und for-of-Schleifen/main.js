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

//itere indexu
for (let eigenshsaft in meinArray) {
    console.log(eigenshsaft);
};

// itere vertibas
for (let eigenshsaft of meinArray) {
    console.log(eigenshsaft);
};

// itere atslegas

for (let eigenshsaft in meinObjekt) {
    console.log(eigenshsaft);
};

                                                     //  nevar iteret objektu//
// for (let eigenshsaft of meinObjekt) {
//     console.log(eigenshsaft);
// };



// for in - masiviem un objektiem
//for of - tikai iterejamiem objektiem 