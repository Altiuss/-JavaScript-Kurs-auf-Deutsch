"use strict";

let inhaber1 = {
    vorname: "Aigars",
    nachname: "Alutis",
    geschlecht: "M",
    alter: 49
};

console.log(inhaber1);

let inhaber2 = {
    vorname: "Nadja",
    nachname: "Lang",
    geschlecht: "W",
    alter: 53
};

console.log(inhaber2);

let konto1 = {
    iban: "DE45637582947263877477",
    bic: "WEASPX67HG",
    inhaber: inhaber1,
    kontostand: 3500,
    aktiv: true
};

console.log(konto1);


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

console.log(konto2);

// Inhaber-Objekt(Vorname, nachname, geschlecht, alter)

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

