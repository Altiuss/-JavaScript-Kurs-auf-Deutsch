"use strict";

let nav = document.querySelector("#navigation");

console.log(nav);


let childNodes = nav.childNodes;
let children = nav.children;
let firstChild = nav.firstChild;
let lastChild = nav.lastChild;

let nextSibling = nav.nextSibling;
let nextElementSibling = nav.nextElementSibling;

let parentElement = nav.parentElement;

let anker = nav.querySelectorAll("ul > li > a");


console.log(childNodes);
console.log(children);
console.log(firstChild);
console.log(lastChild);

console.log(nextSibling);
console.log(nextElementSibling);
console.log(parentElement);
console.log(anker);
console.log();
console.log();
console.log();