"use strict";

let li = document.createElement("li");
li.setAttribute("id", "meinListenElement");
console.log(li);

let a = document.createElement("a");
a.setAttribute("id", "meinAnkerElement");
a.setAttribute("href", "#")
let text = document.createTextNode("Element");

a.appendChild(text);
li.appendChild(a);

let liste = document.querySelector("#navigation > ul");
// liste.appendChild(li);
// liste.insertAdjacentElement("beforebegin", li);
liste.insertAdjacentElement("afterbegin", li);
// liste.insertAdjacentElement("beforeEnd", li);
// liste.insertAdjacentElement("afterend", li);

let dom_string = "<li id =\"mein-listenelement\"><a id=\"mein-ankerelement\" href=\"#\">Element</a></li>";

// liste.insertAdjacentHTML("beforebegin", dom_string);
// liste.insertAdjacentHTML("afterbegin", dom_string);
// liste.insertAdjacentHTML("beforeend", dom_string);
// liste.insertAdjacentHTML("afterend", dom_string);

let text2 = "Lorem ipsum pupsum tra ta ta."

// liste.insertAdjacentText("beforebegin", text2);
// liste.insertAdjacentText("afterbegin", text2);
// liste.insertAdjacentText("beforeend", text2);
liste.insertAdjacentText("afterend", text2);


console.log(a);
