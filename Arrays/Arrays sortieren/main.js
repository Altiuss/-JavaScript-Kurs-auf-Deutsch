"use strict";

// let zahlen = [1, 20, 2000, 1000000, 50];

// let neu_sortiert = zahlen.sort();

// console.log(neu_sortiert);

let worte = ["Zahl", "Wahnsinn", "Mangel", "Abspan"];

console.log(worte.sort());



let zahlen = [1, 20, 2000, 1000000, 50];

let neu_sortiert =[...zahlen].sort(function(a, b){
    return a - b;
});

let neu_sortiert2 = [...zahlen].sort(function(a, b){
    return b - a;
});

console.log(neu_sortiert, neu_sortiert2);