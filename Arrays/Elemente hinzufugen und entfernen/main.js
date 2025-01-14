"use strict";

let personen = [
    'Sebastian',
    "Marcel",
    "Anna",
    "Denis",
    "Mia"
];


console.log(personen);

personen[1] = "Pia";

console.log(personen);


personen.push("Max");

console.log(personen);
//pop atgriež noņemto elementu (pēdējo masīvā).
//Oriģinālais masīvs tiek mainīts, samazinot tā garumu par vienu.
console.log(personen.pop());
console.log(personen);

//Izsaucot personen.unshift("Anna"), 
// metode unshift pievienos jaunu elementu sākumā masīvam un atgriezīs jaunizveidotā masīva garumu.

console.log(personen.unshift("Anna"));

console.log(personen);

//shift izdzēš pirmo elementu masīvā.
//Atgriež izdzēsto elementu.
//Masīva izmērs samazinās par vienu.

console.log(personen.shift());

console.log(personen);
