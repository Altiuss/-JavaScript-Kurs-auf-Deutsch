"use strict";

let meineMap = new Map();

meineMap.set("Test", "Wert Test");
meineMap.set(13, "Wert 13");
meineMap.set([], "Wert []");
meineMap.set(function() {}, "Wert Funkcion");
meineMap.set({}, "Wert objekt");
meineMap.set({}, [1, 4, 56, 34433444]);
console.log(meineMap)


let meineSet = new Set();

meineSet.add("Test");
meineSet.add(3);
meineSet.add([]);
meineSet.add(function() {});
meineSet.add([1, 4, 56, 34433444]);
console.log(meineSet);

meineMap.entries();

console.log(meineMap.entries());
console.log(meineMap.values());
console.log(meineMap.keys());

for (let paar of meineMap) {
    console.log(paar, "paar test");
};

for (let wert of meineMap) {
    console.log(wert, "Wert Test");
};