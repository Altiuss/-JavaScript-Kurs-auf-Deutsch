"use strict";

let meinSet = new Set();

meinSet.add("Test");
meinSet.add(13);
meinSet.add([]);
meinSet.add(function() {});
meinSet.add({});
meinSet.add({});
meinSet.add({});
meinSet.add({});

console.log(meinSet.has(13));
console.log(meinSet.has(7 + 6), "7+6");
console.log(meinSet.has({}), "test");

console.log(meinSet);
console.log(meinSet.size);
console.log(meinSet.clear());
console.log(meinSet);