"use strict";



let htmlCollektion = document.getElementsByClassName("jumbotron");

console.log(htmlCollektion);

for (let i = 0; i < htmlCollektion.length; i++) {
    console.log(htmlCollektion[i]);
};

let htmlCollektion2 = document.getElementsByTagName("li");

console.log(htmlCollektion2);


for (let i = 0; i < htmlCollektion2.length; i++) {
    console.log(htmlCollektion2[i]);
};

for (let e of htmlCollektion) {
    console.log(e);
};

for (let e of htmlCollektion2) {
    console.log(e);
};

let nodeList = document.querySelectorAll("p");
console.log(nodeList)

for (let i = 0; i < nodeList.length; i++) {
console.log(nodeList["-------------------------------"]);
};

nodeList.forEach(function(e) {
    console.log(e);
});