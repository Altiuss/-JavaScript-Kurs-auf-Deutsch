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
console.log('-----------------------------------------------------');



meineMap.forEach(function(wert, eigenschaft, map) {
    console.log(wert);
    console.log(eigenschaft);
    // console.log(map);
});

console.log('-------------------xxxx----------------------------------');

meineSet.forEach(function(wert) {
    console.log(wert);
});


console.log('-------------------0000----------------------------------');

for (let paar of meineMap) {
    console.log(paar);

};

console.log('-------------------0000----S°°-----000000-------------------------');

for (let [eigenschaft, wert] of meineMap) {
    console.log(eigenschaft);
    console.log(wert);

};

console.log('-------------------$$$$$$----------------------------------');


for (let wert of meineSet) {
    console.log(wert);

};