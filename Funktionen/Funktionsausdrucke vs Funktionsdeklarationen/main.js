"use strict";

funktion3();
// funktion2();

// Funktionsausdrucke

const funktion1 = function() {
    console.log("Funktion 1");
};

funktion1();


let funktion2 = function() {
    console.log("Funktion 2");
};

funktion2();

funktion2 = function(){
    console.log("Funktion 2(NEUE)");
};

funktion2();

// Funktionsdeklarationen

function funktion3( ) {
    console.log("Funktion 3");
};

funktion3();