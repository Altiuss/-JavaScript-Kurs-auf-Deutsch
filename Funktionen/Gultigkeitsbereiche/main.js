"use strict";


//Globale Variablen: wird ausserhalb aller Codeblocke definiert und ist von uberall zuganglich
// Lokale Varialen: wird innerhalb eines Codeblock definiert und ist nur in diesem verfugbar

let variable1 = "Variable 1";

const meineFunkcion = function() {
   let variable2 = "Variable 2";

   if (true) {
    let variable3 = "variable 3";
    console.log(variable3);
    console.log(variable2);

   }

    console.log(variable1);
    console.log(variable2);
    // console.log(variable3);
   

};

meineFunkcion();



    console.log(variable1);
    // console.log(variable2);
  


