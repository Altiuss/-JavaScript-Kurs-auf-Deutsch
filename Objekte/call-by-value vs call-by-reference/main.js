"use strict";

let meine_variable = "Aigars";
let mein_objekt = {
    zahl: 5000
};

const meine_funktion = function (v, o) {
    v = "Denis";
    o.zahl = 2000;

};

meine_funktion(meine_variable, mein_objekt);

console.log(meine_variable);
console.log(mein_objekt.zahl);

// call by value (dt.:Ubergabe als wert) Kad mainīgais tiek nodots funkcijai, funkcija strādā ar kopiju, nevis oriģinālu.Izmaiņas funkcijā neietekmē oriģinālo mainīgo.
// (Pēc vērtības) pieeju, kur funkcijām tiek nodota datu kopija, nevis oriģināls.Primitīvie tipi:
//Skaitļi, stringi, boolean vērtības parasti tiek nodotas pēc vērtības.


// cal by reference "ссылка" (dt.: ubergabe als verweis/ruckweis) gilt fur komplexere Datentyp (Objekte, Funktionen, Arrays)
//Tas nozīmē, ka funkcijām tiek nodota atsauce uz oriģinālo objektu vai datu struktūru, nevis tikai tā kopija.



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

const einzahlen = function (e) {
    konto1.kontostand += e;
};


const abheben = function (a) {
    konto1.kontostand -= a;
};



einzahlen(1000);
console.log(JSON.stringify(konto1));

abheben(3000);

console.log(JSON.stringify(konto1));
