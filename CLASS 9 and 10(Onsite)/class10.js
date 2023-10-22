// interface Deal1 {
//         food: string
//         dessert: string
//     }
//     interface Deal2 {
//         food: string
//         drink: string
//         dessert: string
//     }
//     let Order1: Deal1 = {
//         food: "Burger",
//         dessert: "Rabri"
//     }
//     let Order2: Deal2 = {
//         food: "Biryani",
//         drink: "Sprite",
//         dessert: "Kheer"
//     }
// let hamzah: Deal1 = Order2;  // STALE OBJECT: Bana banaya hua object use kr rhy hum
// let hamzah1: Deal1 = {   // FRESH OBJECT: Is case main error aayega when extra property assign kr rhy
//     food:"Briyani",
//     drink: "7Up",
//     dessert:"Kheer"
// }
// let user1 = {name:"Sameed",id:1};
// let user2 = {name:"Ali",id:2, age:22};
// let user3 = {firstName: "Sameed Khan", id:3};
// user1 = user2;
// user1 = user3; // Error aayega 
// console.log(user1.age); // error aayega as extra property aarhi but ONLY IN TYPESCRIPT
//  NESTED OBJECTS
// type TestTypes = string | boolean | number 
// let a: string | boolean | number = 10;
// let b: TestTypes = "20";
// type Book= {
//     name: string,
//     author: {
//         firstName: string,
//         lastName: string
//     }
// };
// type Author = {          // TYPE k method se NEW DATATYPE BANANA
//     firstName: string,
//     lastName: string,
//     dob: {
//         date: number,
//         year: number
//     }
// };
// type Book = {
//     name: string,
//     author: Author
// };
// let book: Book = {
//     name:"C Sharp",
//     author: {
//         firstName: "Harry",
//         lastName: "Potter",
//         dob: {
//             date: 20,
//             year: 2002
//         }
//     }
// };
// console.log(book.author.dob.year);
//  INTERSECTION OF INTERFACES
// interface Student {
//     student_name: string,
//     student_id: number
// }
// interface Teacher {
//     teacher_name: string,
//     teacher_id: number
// }
// type Intersection = Student & Teacher ;     // INTERSECTION NAAM KI DATATYPE JIS MAIN STUDENT aur TEACHER BOTH PROPERTIES
// let obj: Intersection = {
//     student_id: 1,
//     student_name: "Sameed",
//     teacher_id: 1010,
//     teacher_name: "Sir Sameed Khan"
// }
// console.log(obj.teacher_id);
// ANY DATATYPE : is main koi bhi datatype ki value aa skti hai
// let a: any = 10;
// a = true;
// a = {
//     name:"SAMEED"
// };
// a = [1,23];
// a = function() {
//     console.log("MESSAGE");
// };
// UNKNOWN DATATYPE
// let b: unknown = 10;
// b = false;
// b = [1,23,4,5,6];
// b = function(){
//     console.log("MESSAGE");
// };
// let c: boolean = a;  // NO ERROR
// let c: boolean = b;  // ERROR AAYEGA
// NEVER DATATYPE
// let a = 10;
// if(typeof a === "number"){
//     console.log("THIS IS A NUMBER ",a);
// }
// else{
//     console.log("THIS IS NOT A NUMBER ",a);  // a will have NEVER Datatype
// }
// type Custom = string & number ; // NEVER Datatype bcz it is not possible k aik variable k 2 datatypes ho.
// EXPLICIT CASTING : 
// let myName: unknown = "SAMEED";
// let myUpdatedType = myName as string;
// let myUpdatedType = <string>myName; 
// let myUpdatedType = myName as unknown as number; // Is se ye hoga k pehle unknown banayega then number banayaega usko
// ENUM
var TrafficLights;
(function (TrafficLights) {
    TrafficLights[TrafficLights["RED"] = 1] = "RED";
    TrafficLights[TrafficLights["YELLOW"] = 2] = "YELLOW";
    TrafficLights[TrafficLights["GREEN"] = 3] = "GREEN";
})(TrafficLights || (TrafficLights = {}));
;
let redColor = TrafficLights.RED;
console.log(redColor); // THIS WILL RETURN INDEX OF RED VALUE just like in array jo 0 se start hoti h.
export {};
// EQUALS TO LAGA KR VALUE DENE SE STARTING VALUE CHANGES HOJAYEGI INDEX KI
