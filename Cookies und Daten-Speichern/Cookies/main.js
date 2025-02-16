"use strict";



// document.cookie = "vorname=Aigars";
// document.cookie = "nacname=ALutis";
// document.cookie = `${encodeURIComponent("ein key; value-paare")}=${encodeURIComponent("key=value")}`;

const set_cookie = function(name, wert){
    let cookie = `${encodeURIComponent(name)}=`;
    if(wert ) {
        cookie += `${encodeURIComponent(wert)}`;
    }
    document.cookie = cookie;
};

set_cookie("passwort", "@#$%$%^^HHGG*88");

console.log(document.cookie);