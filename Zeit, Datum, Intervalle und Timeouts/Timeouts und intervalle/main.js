"use strict";

// setTeimaut(callback-funktion, zeitspanne[, parametr1, parametr2, ..., paramatr N])


console.log("Los!");

setTimeout(function() {
    console.log("Fertig!");
}, 2000);

// setTeimout(code-string, zeitspanne)

console.log("Los!");

setTimeout("console.log(`Fertig!`);", 3000);

// clearTimeout(1);

// setInterval(callback-funktion, zeitspanne[, parametr1, parametr2, ..., paramatr N])

setInterval(function() {
console.log("Eine sekunde ist um!");
}, 2500)

// setInterval(code-string, zeitspanne)

setInterval("console.log(`Eine sek`)", 4000);