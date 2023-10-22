// FOR LOOP
// for(let i=0;i<20;i++){
//     console.log("HELLO",i);
// }
// let cleanestCities: string[] = ["Karachi", "Islamabad", "Lahore", "Peshawar"];
// for(var i=0; i<=5; i++){        //LET ka use nh ho skta bcz LET is block-scoped and for loop k bahar i nahi jaa sakyga.
//     if("Islamabad"===cleanestCities[i]){
//         console.log("It's one of the cleanest cities.");
//         break;      // TERMINATE Loop Execution. 
//     }
// }
// console.log(i);
// CLASS 4
// var cleanestCities: string[] = ["Karachi", "Islamabad", "Lahore", "Peshawar"];
// var matchFound = "no";
// for(var i=0; i<=5; i++){        //LET ka use nh ho skta bcz LET is block-scoped and for loop k bahar i nahi jaa sakyga.
//     if("Islambad"===cleanestCities[i]){
//         matchFound = "yes";
//         console.log("It's one of the cleanest cities.");
//     }
// }
//     if(matchFound==="no"){
//         console.log("It's not on the list");
//     }
// var cleanestCities: string[] = ["Karachi", "Islamabad", "Lahore", "Peshawar"];
// var numElements = cleanestCities.length;
// var matchFound = false;
// for(var i=0; i<=5; i++){        //LET ka use nh ho skta bcz LET is block-scoped and for loop k bahar i nahi jaa sakyga.
//         if("Islamabad"===cleanestCities[i]){
//             matchFound = true;
//             console.log("It's one of the cleanest cities.");
//         }
//     }
//         if(matchFound===false){
//             console.log("It's not on the list");
//         }
var answers = function (numberOne, numberTwo, Operator) {
    var result = 0;
    if (Operator === "+") {
        result = numberOne + numberTwo;
        console.log(result);
    }
    if (Operator === "-") {
        result = numberOne - numberTwo;
        console.log(result);
    }
    if (Operator === "*") {
        result = numberOne * numberTwo;
        console.log(result);
    }
    if (Operator === "/") {
        result = numberOne / numberTwo;
        console.log(result);
    }
    else {
        console.log("Enter valid input");
    }
};
answers(3, 4, "+");
