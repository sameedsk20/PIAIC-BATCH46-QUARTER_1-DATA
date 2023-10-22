import inquirer from "inquirer";
let input = await inquirer.prompt([
    {
        message: "Enter First Number.",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter Second Number.",
        type: "number",
        name: "num2"
    },
    {
        message: "Choose the operator.",
        type: "list",
        choices: ["+", "-", "*", "/", "%", "μ"],
        name: "operator"
    }
]);
export { input };
