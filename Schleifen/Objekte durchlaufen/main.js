"use strict";

let meinObjekt = {
    name: "Musterman",
    vorname: "Max",
    alter: 26,

};

//So bitte nicht!
// for (let e in meinObjekt) {
//     console.log(meinObjekt[e]);
// };

//Komanda Object.entries() JavaScript tiek izmantota, lai pārveidotu objektu par masīvu, kur katrs elements ir atslēgas-vērtības pāris.

let paare = Object.entries(meinObjekt);

console.log(paare);

for (let paar of paare) {
    console.log(paar);
    for (let e of paar) {
        console.log(e);
    };
};

//Šī metode atgriež masīvu, kurā ir visi objekta meinObjekt īpašību (jeb atslēgu) nosaukumi.

let eigenschaft = Object.keys(meinObjekt);

console.log(eigenschaft)

for (let e of eigenschaft) {
    console.log(e);
};
// let werte = Object.values(meinObjekt);

// console.log(werte);

for (let w of Object.values(meinObjekt)) {
    console.log(w);
};