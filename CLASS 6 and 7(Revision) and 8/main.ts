// JAVASCRIPT OBJECTS

// let user1 = {
//     userName: "Sameed Khan",
//     age: 22,
//     isMarried: false,
//     greet: function() {
//         console.log("Hello");
//     }
// };

// let car1 = {
//     name: "Audi",
//     color: "Black",
//     model: 2023,
//     tags: ["Luxury" , "Fast" , "Expensive"],
//     start: function() {   // this is called an anonymous function beacause hm isko koi name nh de rhy function k aagy
//         console.log("Engine started");
//     }
// };

// car1.start();

// JSON CODE

// {
//     "name" : "Sameed",
//     "age" : 22 ,
//     "gender" : "male" ,
//     "family" : ["Mother", "Brother", "Sister"]
//     }


// ERRORS IN TYPESCRIPT

// 1. Syntax Error
// let fName = "Sameed";

// 2. Type Error
// console.loger(message); // Loger naam ki koi property hi nh hai in CONSOLE

// 3. Assignablity Error : jaise string to number assign kr rhy ho hum
// let message = "Hello";
// message = 6;
// console.log(message);


// MODULE KO IMPORT KR RHY HAIN ABB

import {num1 , greet} from "./modue1";
console.log(num1);
greet();

