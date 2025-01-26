"use strict";

document.addEventListener("keydown", e => {
   
    if(e.key === "a") {
        console.log("Das a-Zeichen wurde gedruckt")
    }
});

document.addEventListener("keyup", e => {
    if (e.key === "p") {
        console.log("Das p-Zeichen wurden gedruck");
    }
});

document.addEventListener("keypress", e => {
    if (e.key === "t") {
        console.log("Das t-Zeichen wurden gedruck");
    }
});