"use strict";

// while (Bedingung) {
//   ...
// };

// let x = 0;

// while (x < 5) {

//     // x += 1;

//     console.log(`While: ${x}`);

//     x += 1;

// };

let y = 0;

while (y >= 0 && y < 100) {

    console.log(`Test`);

    y += 1;

};

let z = 0;

while (z < 10) {
    z++;

    if (z == 5) {
        continue;
    } else if (z == 7) {
        break;
    }
    console.log(z);
};