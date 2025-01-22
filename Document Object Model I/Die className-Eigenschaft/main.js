"use strict";

let jumbo = document.querySelector(".jumbotron");

let classes = jumbo.className;

jumbo.className ="neue-classe";

jumbo.className += " lorem"
jumbo.className = jumbo.className.replace("neue", "deine");
jumbo.className = jumbo.className.replace("lorem", "");

document.querySelector("#navigation > ul > li:first-of-type > a").className = "";
document.querySelector("#navigation > ul > li:nth-of-type(3) > a").className = "active";

console.log(classes);