"use strict";

let jumbo = document.querySelector(".jumbotron");
// console.log(jumbo);


// console.log(jumbo.innerHTML);
// console.log(jumbo.innerText);
// console.log(jumbo.textContent);


let string1 = "";
let string2 = "<header><h2>Lorem ipsum dolor sit amet</h2></header>";
let string3 = "<p>Lorem ipsum pupsum dolores.<p>";
let string4 = "Lorem ipsum pupsum dolores";

// jumbo.innerHTML = string1;
// jumbo.innerText = string1;
// jumbo.textContent = string1;

// jumbo.innerHTML = string2;
// jumbo.innerHTML += string3;

jumbo.innerText = string2;


console.log(jumbo);