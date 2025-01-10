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


    const kontostand_ausgeben = function(konto) {
        console.log(`${konto.inhaber.geschlecht == "M" ? "Herr" : "Frau"} ${konto.inhaber.vorname} ${konto.inhaber.nachname} 
            hat ${konto.kontostand} auf ${konto.inhaber.geschlecht == "M" ? "seinem" : "ihrem"} Konto.`);
    };


kontostand_ausgeben(konto1);
kontostand_ausgeben(konto2);

