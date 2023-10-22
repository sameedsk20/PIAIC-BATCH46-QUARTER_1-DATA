"use strict";
// FOR LOOP
// for(let i=0;i<20;i++){
//     console.log("HELLO",i);
// }
let cleanestCities = ["Karachi", "Islamabad", "Lahore", "Peshawar"];
for (var i = 0; i <= 5; i++) { //LET ka use nh ho skta bcz LET is block-scoped and for loop k bahar i nahi jaa sakyga.
    if ("Islamabad" === cleanestCities[i]) {
        console.log("It's one of the cleanest cities.");
        break; // TERMINATE Loop Execution. 
    }
}
console.log(i);
