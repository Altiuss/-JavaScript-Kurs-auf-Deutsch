"use strict";

let vorname = "Aigars";
let nachname = "Alutis";
let alter = 49;

let name = vorname + " " + nachname;
console.log(name); 

let begreussung = `Hallo ${name}!`;
console.log(begreussung); 

let zusammenfassung = `${vorname}${' '.repeat(20)}${nachname} (${alter}Jahre)`;
console.log(zusammenfassung); 

let mehrzeiligeTemplateString = `Hallo ${name}!
Du bist ${alter} Jahre alt.
Wie geht es dir`;
console.log(mehrzeiligeTemplateString); 


 let konkatinierteTemplateString = `Hallo ${name}!` +
`Du bist ${alter} Jahre alt.` +
`Wie geht es dir`;

console.log(konkatinierteTemplateString); 
