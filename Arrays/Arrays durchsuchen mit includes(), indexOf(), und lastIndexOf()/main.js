"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Denis",
    "Marcel",
    "Aigars",
    "Mia",
    "Marcel",
];

 //Metode pārbauda, vai norādītā vērtība ("Marcel") atrodas masīvā.
//Atgriež true, ja vērtība ir masīvā, vai false, ja tās nav.

console.log(personen.includes("Marcel"));

//"Marcel" masīvā atrodas 1. indeksā.
//Funkcija includes("Marcel", 2) sāk pārbaudi tikai no 2. indeksa (kur atrodas "Anna").
//Tā kā "Marcel" nav atrodams no 2. indeksa uz priekšu, tiek atgriezts false.

console.log(personen.includes("Marcel", 2));
console.log(personen.includes("Marcel", 1));


console.log(personen);

personen.indexOf("Marcel");

//indexOf meklē "Marcel" masīvā no sākuma.
//"Marcel" atrodas masīvā 1. pozīcijā (indekss 1).
//Ja "Marcel" netiktu atrasts, indexOf atgrieztu -1.

console.log(personen.indexOf("Marcel"));

//Metode indexOf("Marcel", 2) sāk meklēšanu no indeksa 2 (vērtība "Anna") un iet uz priekšu.

console.log(personen.indexOf("Marcel", 2));


//lastIndexOf() atrod pirmo no masīva beigām skatoties, 
// kas atbilst meklētajam elementam, un atgriež tā indeksu.  tiklīdz atrod pirmo sakritību, apstājas.
console.log(personen.lastIndexOf("Marcel"));

//Otrais parametrs (2) nosaka sākumpunktu (indeksu), no kura sākt meklēt uz sākumu. Ja vērtību atrod šajā diapazonā (0–2), tā tiek atgriezta.

console.log(personen.lastIndexOf("Marcel", 2));

console.log(personen);