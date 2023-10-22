import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "enter number one"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "enter number two"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "select operator"
    }
]);
let result = 0;
if (answer.operator === "+") {
    result = answer.numberOne + answer.numberTwo;
}
else if (answer.operator === "-") {
    result = answer.numberOne - answer.numberTwo;
}
else if (answer.operator === "*") {
    result = answer.numberOne * answer.numberTwo;
}
else if (answer.operator === "/") {
    result = answer.numberOne / answer.numberTwo;
}
console.log("Your result is: " + result);
