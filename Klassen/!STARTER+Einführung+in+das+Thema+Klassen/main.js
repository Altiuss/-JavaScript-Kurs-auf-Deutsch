"use strict";

let konto = {
    iban: "DE6206752564419854",
    inhaber: ["Max Mustermann"],
    saldo: 3500,
    aktiv: true,
    einzahlen(einzahlung) {
        this.saldo += einzahlung;
    },
    abheben(auszahlung) {
        this.saldo -= auszahlung;
    },
    kontostand_abfragen() {
        return this.saldo;
    }
};


let k = new Konto("DE6206752564419854", "Max Mustermann", 3500);
console.log(k);

