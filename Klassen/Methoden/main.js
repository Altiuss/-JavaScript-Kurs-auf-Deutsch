"use strict";


// let konto = {
//     iban: "DE6206752564419854",
//     inhaber: ["Max Mustermann"],
//     saldo: 3500,
//     aktiv: true,
//     einzahlen(einzahlung) {
//         this.saldo += einzahlung;
//     },
//     abheben(auszahlung) {
//         this.saldo -= auszahlung;
//     },
//     kontostand_abfragen() {
//         return this.saldo;
//     }
// };

// // console.log(konto);

let k = new Konto("DE6206752564419854", ["Max Mustermann"], 3500);
k.einzahlen(1500);
k.abheben(5000);

console.log(k);