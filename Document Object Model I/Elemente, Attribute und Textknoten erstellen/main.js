"use strict";

let div = document.createElement("div");
console.log(div);

let attr = document.createAttribute("id");
console.log(attr);
attr.value = "meine_id";
console.log(attr);

div.setAttributeNode(attr);
console.log(div);

div.setAttribute("class", "meine_classe");

let text = document.createTextNode("Lorem ipsum dolor sit amet.")
console.log(text);
console.log(div);