"use strict";

let meineMap = new Map();

console.log(meineMap);

meineMap.set("Test", "Wert zu Eigenschaft Test");
meineMap.set(13, "Wert zu Eigenschaft 13");
meineMap.set([13, 24, 45], "Array ");
meineMap.set(function(){}, "Funkcion ");
meineMap.set({}, "Objekt ");

console.log(meineMap);

console.log(meineMap.get(13));
console.log(meineMap.get({}));
console.log(meineMap.get([]));
console.log(meineMap.get(function() {}));
console.log(meineMap.get([13, 24, 45]));
console.log(meineMap.get([11, 24, 45]));


console.log(meineMap.has(13));
console.log(meineMap.has(11));
console.log(meineMap.has({}));

// meineMap.delete("Test");
console.log(meineMap);
console.log(meineMap.size);
