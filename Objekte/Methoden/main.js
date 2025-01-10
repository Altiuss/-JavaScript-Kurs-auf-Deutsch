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
    aktiv: true,
    einzahlen(e) {
        this.kontostand += e;
    },
    abheben(a) {
        this.kontostand -= a;
    }

};

let konto2 = {
    iban: "DE45637582947263877477",
    bic: "WEASPX67HG",
    inhaber: {
        vorname: "Aigars",
        nachname: "Alutis",
        geschlecht: "M",
        alter: 49
    },
    kontostand: 4000,
    aktiv: true,
    einzahlen(e) {
        this.kontostand += e;
    },
    abheben(a) {
        this.kontostand -= a;
    }

};


konto1.einzahlen(1000);
konto2.abheben(7500);


console.log(konto1.kontostand);
console.log(konto2.kontostand);



let person = {
    vorname: "Aigars",
    nachname: "Alutis",
    alter: 49,
    person_verarbeiten() {
        return {
            n: `${this.vorname} ${this.nachname}`,
            z: `${this.vorname} ${this.nachname} (${this.alter}Jahre)`,
            b: `Hallo ${this.vorname} ${this.nachname}!`
        }
    }

};

person.person_verarbeiten();
console.log(person);
console.log(person.person_verarbeiten());


// const person_verarbeiten = function(p) {


//     return {
//         n: `${p.vorname} ${p.nachname}`,
//         z: `${p.vorname} ${p.nachname} (${p.alter}Jahre)`,
//         b: `Hallo ${p.vorname} ${p.nachname}!`
//          };

//     };
