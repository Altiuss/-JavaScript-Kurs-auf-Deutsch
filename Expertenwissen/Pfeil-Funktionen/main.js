"use strict";

const multiplicieren = function (a, b) { return a * b; };

const multiplicierens = (a, b) => { return a * b; };

const multiplicierens1 = (a, b) => a * b;

console.log(multiplicieren(5, 10));
console.log(multiplicierens(3, 11));
console.log(multiplicierens1(31, 4));

const begruessung = function (name) { return `Hallo ${name}`; };
const begruessung1 = name => `Hallo ${name} !`;

console.log(begruessung("Aigars"));
console.log(begruessung1("Aigars"));

const sinnDesLebens = function () { return 42; };
const sinnDesLebens1 = () => 4245;

console.log(sinnDesLebens());
console.log(sinnDesLebens1());

let einkaufsliste = [
    "Brot",
    "Kase",
    "Tomaten",
    "Butter",
    "Eier",
    "Orangesaft"
];

einkaufsliste.forEach(function(e) {console.log(e)});
einkaufsliste.forEach(e => console.log(e));