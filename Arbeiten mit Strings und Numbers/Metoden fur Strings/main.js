"use strict";

let s = " Lorem ipsum dolor sit amet ipsum";

s.length;

console.log(s.length);
//Funkcija indexOf sāks meklēt "ipsum" no 20. simbola:
//Tā ignorē tekstu pirms 20. simbola.
//Rezultāts būs -1, jo pēc 20. pozīcijas virkne "ipsum" vairs neparādās.

console.log(s.indexOf("ipsum", 20));
//Virkne "amet" parādās divreiz:
//22. indeksā (pirmā parādīšanās).
//indeksā (otrā parādīšanās).
//lastIndexOf atgriež pēdējo parādīšanās vietu (41).

console.log(s.lastIndexOf("amet"));
// Meklējamā virkne (piemēram, "sit").
//position (neobligāts parametrs): Indekss, no kura jāsāk meklēt (noklusējumā 0).
//Atgriež:true, ja virkne "sit" tiek atrasta.
//false, ja virkne "sit" netiek atrasta.
//

console.log(s.includes("sit", 20));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.trim());
console.log(s.repeat(2).split(" ").join(""));
console.log("-----------------------------------------------------------------");

let regex = /i\w{4}/g;

console.log(s.search("ipsum"));
console.log(s.replace("ipsum", "pupsum"));
console.log(s.replace(regex, "pupsum"));
console.log(s.replace(/i\w{4}/, "pupsum"));
console.log(s.match(regex));
console.log();

let result = s.split(" ").join("");
console.log(result);