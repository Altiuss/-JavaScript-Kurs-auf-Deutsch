"use strict";

// const meineFunkcion = function(parameter1, parameter2) {
// auscu
// };

// meineFunkcion(p1,p2);


const logDieZhl = function (a) {
    console.log(a);
};

logDieZhl(45);


const begruessung = function (vorname, nachname) {
    console.log(`Hallo ${vorname} ${nachname}!`);
};

let vor = "Aigars";
let nach = "Alutis";

begruessung(vor, nach);


const aufgabePlus = function (x, y) {
    let r = x + y;
    return r;

};

const aufgabeMinus = function (x, y) {
    let r = x - y;
    return r;

}; const aufgabeAd = function (x, y) {
    let r = x * y;
    return r;

}; const aufgabeSub = function (x, y) {
    let r = x / y;
    return r;

}; const aufgabe = function (x, y) {

};

let num1 = 34;
let num2 = 17;


console.log(aufgabePlus(num1,num2));
console.log(aufgabeMinus(num1,num2));
console.log(aufgabeSub(num1,num2));
console.log(aufgabeAd(num1,num2));
