"use strict";

// console.log(addieren([23, 23, 41, 64, 9, 109]));

const addieren = function(...summsnden) {

    let summe = 0;
    summsnden.forEach(e => summe += e);
    return summe;

};

console.log(addieren(23, 23, 41, 64, 9, 109));

const personen_addieren = function(name1, name2, ...punkte) {
    let summe = 0;
    punkte.forEach(e => summe += e);
return `${name1} und ${name2} habe zusammen ${summe} gesammeln!`
};

console.log(personen_addieren("Jan", "Mona", 56, 89, 13, 67, 98, 100, 156, 76));