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



let k = new Konto("DE6206752564419854", ["Max Mustermann"], 3500);
let kk = new Kinderkonto("DE6206752564419777", "Mona Mustermann", 250, 500);
// k.einzahlen = 1000;
// k.abheben = 4000;


k.einzahlen(1500);
k.abheben(5000)
console.log(k.kontostand_abfragen())
console.log(kk)
kk.abheben(1000);
// console.log(k)
console.log(kk)
