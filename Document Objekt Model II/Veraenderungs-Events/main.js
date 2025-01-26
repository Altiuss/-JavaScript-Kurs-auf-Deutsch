"use strict";

let input = document.querySelector("input[type=text]");
input.addEventListener("input", e => console.log(e.target.value));
input.addEventListener("change", e => console.log(e.target.value));
console.log(input);
let textarea = document.querySelector("textarea");
textarea.addEventListener("input", e => console.log(e.target));
textarea.addEventListener("change", e => console.log(e));
console.log(textarea);


let checkboxen = document.querySelectorAll("input[type=checkbox]");
checkboxen.forEach(el => {
    el.addEventListener("change", e => {
        console.log(e.target.value);
        console.log(e.target.checked);
    });
});
console.log(checkboxen);

let radiobuttons = document.querySelectorAll("input[type=radio]");
radiobuttons.forEach(el => {
    el.addEventListener("change", e => {
        console.log(e.target.value);
    });
});

let range = document.querySelector("input[type=range");
range.addEventListener("change", e => {
    console.log(e.target.value);
});


