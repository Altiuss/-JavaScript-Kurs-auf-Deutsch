"use strict";

let person1 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meine_methode() { console.log(this) }
};

person1.meine_methode();

// this. - undefined

let person2 = {
    vorname: "Zanis",
    nachname: "Musterbars",
    alter: 44,
    meine_methode() {
        const meine_funktion = function () { console.log(this); };
        meine_funktion();
    }
};

person2.meine_methode();

let person3 = {
    vorname: "Gunars",
    nachname: "Astra",
    alter: 89,
    meine_methode() {
        const meine_funktion = () => console.log(this);
        meine_funktion();
    }
};

person3.meine_methode();
