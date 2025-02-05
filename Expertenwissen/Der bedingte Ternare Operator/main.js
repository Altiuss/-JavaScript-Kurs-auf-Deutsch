"use strict";

// if (Bedingung) {
//     Ausdruck_1;
// } else {
//     Ausdruck_2;
// }

let meine_zahle = 12;

// if (meine_zahle > 10) {
//     console.log("groser als 10");
// } else {
//     console.log("kleiner als 10");
// }


// console.log(meine_zahle > 10 ? "groser als 10" : "kleiner als 10");

// let geschlecht = 1;
// console.log(geschlecht);

// console.log(`Hallo ${geschlecht ? "Frau" : "Herr"} Musterman`);

// console.log(geschlecht);

// let fuehrerschein = true;

// const  fuehrerschein_kontrole = function() {
//     if (fuehrerschein) {
//         return "Darf Auto fahren"
//     } else {
//         "Darf nicht Auto fahren"
//     }
// }

const fuehrerschein_kontrole = function () {
    return fuehrerschein ? "Darf Auto fahren" : "Darf nicht Auto fahren";
}

// console.log(fuehrerschein_kontrole());

// let erdbeschleunigung = 15.2;
// let panik = false;
// console.log(erdbeschleunigung);
// console.log(panik);

// erdbeschleunigung > 9.81 ? (panik = true, erdbeschleunigung = 9.81) : (panik = false, erdbeschleunigung = 9.81);

// console.log(erdbeschleunigung);
// console.log(panik);

let farbe = "rosa";

// if (farbe === "rot") {
//     console.log("Ich mag rot!")
// } else if (farbe === "blau") {
//     console.log("Blau finde ich auch gut!")
// } else if (farbe === "grun") {
//      console.log("Grun mag ich nicht")
// } else {
//     console.log(`Zur Farbe ${farbe} habe ich keine meinung`)
// }



console.log(farbe === "rot" ? "Ich mag rot!" : 
    farbe === "blau" ? "Blau finde ich auch gut!" : 
    farbe === "grun" ? "Grun mag ich nicht" : 
    `Zur Farbe ${farbe} habe ich keine meinung`);

