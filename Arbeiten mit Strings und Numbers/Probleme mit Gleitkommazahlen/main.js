"use strict";

//"Gleitkommazahlen" vācu valodā nozīmē:
//"Peldošā komata skaitļi" vai "skaitļi ar peldošo komatu". - "floating-point numbers".


console.log(14.23 + 354.97); // = 369.20000000000005
console.log((14.23 * 100 + 354.97 * 100) / 100);
console.log((14.23 + 354.97).toFixed(2));
console.log(+(14.23 + 354.97).toFixed(2));

console.log(+((14.23 + 354.97).toFixed(2)));

console.log(9332654729891549); // = 9332654729891548
console.log(BigInt(9332654729891549)); 