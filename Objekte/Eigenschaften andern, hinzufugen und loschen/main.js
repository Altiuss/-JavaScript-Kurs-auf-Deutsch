"use strict";


let auto = {
    marke: "BMW"
};


// Eigenschaft andern

auto.marke = "Tesla";

// Eigenschaften hinzufugen

auto.model = "Model 3";
auto.ps = 450;
auto["farbe"] = "rot";
console.log(auto);

// Eigenschaften entfernen

delete auto.farbe;

console.log(auto);