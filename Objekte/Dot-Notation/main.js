"use strict";



let konto1 = {
    iban: "DE45637582947263877477",
    bic: "WEASPX67HG",
    inhaber: {
        vorname: "Aigars",
        nachname: "Alutis",
        geschlecht: "M",
        alter: 49
    },
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

// werte auslesen (Dot-Notation)

let wert1 = konto1.iban;

console.log(wert1);

let wert3 = konto2.inhaber.nachname;

console.log(wert3);

console.log(`Frau ${konto2.inhaber.vorname} ${konto2.inhaber.nachname} habe ${konto2.kontostand} auf ihrem Konto `);

// wrte setzen (Dot-Notation)


konto1.abhebelimit = 1000;
console.log(konto1.abhebelimit);

// werte setzen - iestatit vertibas (Dot-Notazion)

konto1.kontostand = 3000;
console.log(konto1);


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

console.log(auto1);
console.log(auto1.preis);

auto1.preis = 21000;


console.log(auto1.preis);
