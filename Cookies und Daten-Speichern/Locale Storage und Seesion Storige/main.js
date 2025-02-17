"use strict";

localStorage.setItem("name", "Aigars Alutis");
console.log(localStorage.getItem("name"));

localStorage.setItem("alter", "26");
localStorage.removeItem("name");
// localStorage.clear();

console.log(localStorage);

sessionStorage.setItem("passwort", "hjhdsfs&&^&*(&&^");
sessionStorage.setItem("farbe", "blau");
sessionStorage.removeItem("passwort");

sessionStorage.clear();

console.log(sessionStorage);

