"use strict";

let e1 = document.querySelector("#navigation > ul > li:nth-of-type(1) > a");
let el1Parent = e1.parentElement;
let e2 = document.querySelector("#navigation > ul > li:nth-of-type(2) > a");
let el2Parent = e2.parentElement;

e1.addEventListener("click", e => {
    e.preventDefault();
    console.log("e1 hat es mitbekommen");
});

el1Parent.addEventListener("click", e => {
    console.log("e1Parent hat es mitbekommen");
});

e2.addEventListener("click", e => {
    e.stopPropagation();
    console.log("e2 hat es mitbekommen");
});

el2Parent.addEventListener("click", e => {
    console.log("e2Parent hat es mitbekommen");
});