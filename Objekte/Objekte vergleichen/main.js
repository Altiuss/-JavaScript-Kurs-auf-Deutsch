"use strict";

let auto = {
    marke: "BMW",
    modell: "i8"
};

let auto2 = {
    marke: "Tesla",
    modell: "Model X"
};

let auto3 = {
    marke: "Tesla",
    modell: "Model X"
};

// console.log(auto == auto2);
// console.log(auto3 == auto2);
// console.log(auto3 == auto3);
// console.log({} == {});
// console.log(auto2.marke  == auto3.marke && auto2.modell == auto3.modell);
// console.log(auto2. == auto3.);

const autosVergleichen = function(a, b) {
    if (a.marke == b.marke && a.modell == b.modell) {
        return true;
    } else {
        return false;
    }
};

// autosVergleichen(auto2, auto3);
console.log(autosVergleichen(auto, auto3));
console.log(autosVergleichen(auto2, auto3));