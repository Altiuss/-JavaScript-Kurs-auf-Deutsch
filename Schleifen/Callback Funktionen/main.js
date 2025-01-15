"use strict";

// let funktion1 = function() {
//     console.log("Ich bin funkcion 1!")
// };


let funktion2 = function (f) {
    console.log("Ich bin funkcion 2!")
    f();
};


// funktion2(funktion1);

funktion2(function () { console.log("Ich bin funkcion 1!") });