"use strict";

let k = new Konto("DE6206752564419854", "Max Mustermann", 3500);
console.log(k)

let k_als_json_string = JSON.stringify(k);

console.log(k_als_json_string);

let k_als_objekt = JSON.parse(k_als_json_string);
console.log(k_als_objekt);

let k_ney = new Konto(k_als_objekt._iban, k_als_objekt._inhaber, k_als_objekt._saldo, k_als_objekt._aktiv);

console.log(k_ney);