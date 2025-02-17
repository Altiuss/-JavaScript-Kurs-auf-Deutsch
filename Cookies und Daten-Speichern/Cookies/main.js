"use strict";

//Syntax
// document.cookie = "cookie_name=[cookie_wert][; max-age-zeit_in_s]"

document.cookie = "vorname=Aigars";
document.cookie = "nacname=ALutis";
document.cookie = `${encodeURIComponent("ein key; value-paare")}=${encodeURIComponent("key=value")}`;
document.cookie = "10s_cookie=; max-age=10";

setTimeout(() => console.log(document.cookie), 9000);
setTimeout(() => console.log(document.cookie), 11000);

document.cookie = `mein_alter=49; max-age=${60*60*24}`;

const set_cookie = function(name, wert, haltbarkeit){
    let cookie = `${encodeURIComponent(name)}=`;
    if(wert ) {
        cookie += `${encodeURIComponent(wert)}`;
    }
    if(haltbarkeit) {
        cookie += `; max-age=${haltbarkeit}`;
    }
    document.cookie = cookie;
};

set_cookie("passwort", "@#$%$%^^HHGG*88", 60*60*2);

set_cookie("zahlen", "1234", 60*60)
set_cookie("zahlen", "45678", 60*60)

const delete_cookie = function(name) {
    document.cookie = `${encodeURIComponent(name)}=; max-age=-1`;
}

delete_cookie("zahlen");
delete_cookie("vorname");
delete_cookie("passwort");
delete_cookie("nacname");
delete_cookie("mein_alter");

console.log(document.cookie);