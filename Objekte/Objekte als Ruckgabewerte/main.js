"use strict";

let person = {
    vorname: "Aigars",
    nachname: "Alutis",
    alter: 49

};

const person_verarbeiten = function(p) {

    // let name = `${p.vorname} ${p.nachname}`;
    // let zusammenfasung = `${p.vorname} ${p.nachname} (${p.alter}Jahre)`;
    // let begruessung = `Hallo ${p.vorname} ${p.nachname}!`;

    // return {name, zusammenfasung, begruessung};

    // let rucgabe_objekt = {
    //     n: name,
    //     z: zusammenfasung,
    //     b: begruessung
    // };


    return {
        n: `${p.vorname} ${p.nachname}`,
        z: `${p.vorname} ${p.nachname} (${p.alter}Jahre)`,
        b: `Hallo ${p.vorname} ${p.nachname}!`
         };

    };





console.log(person_verarbeiten(person));