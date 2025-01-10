"use strict";

let inhaber1 = {
    vorname: "Aigars",
    nachname: "Alutis",
    geschlecht: "M",
    alter: 49
};

let konto1 = {
    iban: "DE45637582947263877477",
    bic: "WEASPX67HG",
    inhaber: inhaber1,
    kontostand: 3500,
    aktiv: true
};


let konto2 = {
    iban: "LV45637582947263877471",
    bic: "WGYGFUTDYHG",
    inhaber: {vorname: "Nadja",
        nachname: "Lang",
        geschlecht: "W",
        alter: 53},
    kontostand: 6700,
    aktiv: true
};

// werte auslesen (Brecket-Notation)

let wert1 = konto1["iban"];
let wert2 = konto1.iban;
let wert3 = konto1["inhaber"]["alter"];
console.log(wert1);
console.log(wert2);
console.log(wert3);

// Eigenschaft setzen (Brecket-Notation) iestatit ipasibas

konto2["abhebelimit"] = 1000;
console.log(konto2["abhebelimit"]);


// werte setzen - iestatit vertibas (Brecket-Notazion)


konto2["abhebelimit"] = 3000;
console.log(konto2["abhebelimit"]);

// warum sollten wir die Bracket-Notatin jemals verwnden?


let eigenschaft = "iban";
let wert4 = konto1[eigenschaft];
console.log(wert4);


let auto1 = {
    marke: "audi",
    model: "A7",
    kraftsoffart: "Diesel",
    kilometerstand: 130000,
    ausstattung: {
        navigationssystem: true,
        klimanlage: true,
        sitzheizung: false,
        tempomat: false,
        panoramadach: false
    },
    zustand: "Gebraucht",
    preis: 17800
};

console.log(`Frau ${konto2["inhaber"]["nachname"]} hat ${auto1["marke"]}`);

console.log(auto1);


auto1["marke"] = "BMW";
auto1["mode"] = "745";
let modelle = auto1["marke"];


console.log(`Frau ${konto2["inhaber"]["nachname"]} hat ${modelle}`);

