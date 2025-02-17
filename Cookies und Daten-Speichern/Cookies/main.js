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
//   ein key-value-paar=key=value; ein%20key%3B%20value-paare; ein%20key%3B%20value-paare=key%3Dvalue;
 //  vorname=Aigars; nacname=ALutis; 10s_cookie=; mein_alter=49; passwort=%40%23%24%25%24%25%5E%5EHHGG*88; zahlen=45678

//   ['ein key-value-paar=key=value', ' ein%20key%3B%20value-paare', ' ein%20key%3B%20value-paare=key%3Dvalue', 
// ' vorname=Aigars',' nacname=ALutis', ' mein_alter=49', ' passwort=%40%23%24%25%24%25%5E%5EHHGG*88', ' 10s_cookie=', ' zahlen=45678']

// delete_cookie("zahlen");
// delete_cookie("vorname");
// delete_cookie("passwort");
// delete_cookie("nacname");
// delete_cookie("mein_alter");

const get_cookie = function(name) {
    let cookie_array = document.cookie.split(";")
    console.log(cookie_array);
    let regex = new RegExp(`^\\s?${encodeURIComponent(name)}=`);
    for(let cookie of cookie_array) {
        if(cookie.match(regex)) {
            return decodeURIComponent(cookie.replace(regex, ""));
        }
    }
}

console.log(get_cookie("passwort"));

const has_cookie = function(name) {
    let cookie_array = document.cookie.split(";")
    console.log(cookie_array);
    let regex = new RegExp(`^\\s?${encodeURIComponent(name)}=`);
    for(let cookie of cookie_array) {
        if(cookie.match(regex)) {
            return true;
        }
    }
    return false;
}

console.log(has_cookie("vornam"));

console.log(document.cookie);