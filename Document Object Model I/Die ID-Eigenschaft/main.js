"use strict";

let nav = document.querySelector("#navigation");
console.log(nav);

let id = nav.id;
console.log(id);

nav.id = "new_id";
nav.id = "";

console.log(id);