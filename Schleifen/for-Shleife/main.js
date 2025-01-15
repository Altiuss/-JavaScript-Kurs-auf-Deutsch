"use strict";

let x = 0;

while(x < 5) {
console.log(x);
x++;

};

// for (Zahlvariable; Bedingung; Anweisung_fur_die_Zahlvariable) {
//     Code
// };

for (let i = 0; i < 5; i++) {

    if (i == 3) {
        continue;
    } else if (i == 4) {
        break;
    }
    console.log(i);
};

console.log(`code ist beendet`)
