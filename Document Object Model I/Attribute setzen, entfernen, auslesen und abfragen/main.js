"use strict";

document.querySelector(".jumbotron").setAttribute("lang", "de");

document.querySelector("head > meta:nth-of-type(3)").removeAttribute("content");

console.log(document.querySelector("html").getAttribute("lang"));

console.log(document.querySelector("head > link").hasAttribute("rel"));
console.log(document.querySelector("head > link").hasAttribute("typ"));