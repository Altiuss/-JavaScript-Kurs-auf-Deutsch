"use strict";


let div = document.createElement("div");
div.setAttribute("id", "meine_id");
div.setAttribute("class", "meine_klase");
let text = document.createTextNode("Lorem ipsum dolor sit amet.")


div.appendChild(text);



let jumbo = document.querySelector(".jumbotron > section");


jumbo.appendChild(div);

let li = document.querySelector("#navigation > ul > li");


let ul = document.querySelector("#navigation > ul");


ul.appendChild(li);