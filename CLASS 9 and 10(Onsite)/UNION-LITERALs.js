// let trafficLight: String | boolean = "green";  // | is sign ko laga kr multiple data types de skte hainn
export {};
// trafficLight = "" ; 
// let otherLight: boolean | "red" | "yellow" | "green"= false; // Union along with literals
// otherLight = "green";
// let myAge : string | number;
// myAge = 16;         // NARROWING kr rhy to restrict datatype
// console.log(myAge);
// function renderValue(val: string | number){  // NARROWING USING FUNCTION
//     if(typeof(val) === "string"){
//         val.toUpperCase();
//     }
//     else{
//         val.toFixed(3);
//     }
// }
// IF WE WANT RETREIVE A VALUE FROM INSIDE AN OBJECT WITH A NON-SYNTAX NAME
// let teacher = {
//     "first-name": "Sameed",
//     salart: 100000
// }
// console.log(teacher["first-name"]);
// INTERFACE BANANA HAI (Means k apni datatype bana rhy khud se OR Structure bana rhy)
// interface ITeacher {
//     name: string
//     age: number
// }
// let teacher1: ITeacher = {
//     name: "Sameed",
//     age: 22
// }
// let teacher2: ITeacher = {
//     name: "Hamzah",
//     age: 23
// }
// EXTRA PROPERTIES AGR HUM ASSIGN KAREIN TOU ACCEPT HOJATI BUT NOT LESS
// interface Deal1 {
//     food: string
//     dessert: string
// }
// interface Deal2 {
//     food: string
//     drink: string
//     dessert: string
// }
// let Order1: Deal1 = {
//     food: "Burger",
//     dessert: "Rabri"
// }
// let Order2: Deal2 = {
//     food: "Biryani",
//     drink: "Sprite",
//     dessert: "Kheer"
// }
// Order1 = Order2;        // Accepted as Order1 will be getting extra properties
// Order2 = Order1;        // Error because 1 property of Order 2 is missing
