"use strict";

console.log(parseInt(10 * Math.random()));


console.log(Math.round(parseFloat(Math.random().toFixed(1))));

console.log(Math.floor(Math.random() * 11));

console.log(Math.floor(Math.random() * 10) + 1);


console.log(Math.floor(Math.random() * 10) + 1);

console.log(Math.floor(Math.random() * (60 - 40 + 1)) + 40);

let minimum = 0;
let maximum = 255;

console.log(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);


let counts = Array(21).fill(0); // Skaitītājs katram skaitlim 40-60
let min = 40, max = 60;

for (let i = 0; i < 1000000; i++) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  counts[randomNumber - min]++;
}

// Rezultātu izvadīšana
for (let i = 0; i <= max - min; i++) {
  console.log(`${i + min}: ${counts[i]} (${((counts[i] / 1000000) * 100).toFixed(2)}%)`);
};

let red = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
let green = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
let blue = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


let color = `rgb(${red}, ${green}, ${blue})`;
console.log('%cTeksts ar dinamisku fonu', `color: black; background-color: ${color}; padding: 4px;`);

console.log('%cTeksts ar dzeltenu fonu', `color: ${color}; background-color: yellow; font-weight: bold; padding: 4px;`);





