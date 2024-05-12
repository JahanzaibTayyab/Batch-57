#! /usr/bin/env node
import inquirer from "inquirer";
import { sum, subtract, multiply, division } from "./operations.js";
const questions = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your 1st Number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your 2nd Number",
    },
    {
        type: "list",
        name: "operator",
        message: "Select your Operator",
        choices: ["+", "-", "*", "/"],
    },
]);
console.log("🚀 ~ questions:", questions);
if (questions.operator == "+") {
    console.log("This is Sum");
    sum(questions.num1, questions.num2);
}
else if (questions.operator == "-") {
    console.log("This is Subtract");
    subtract(questions.num1, questions.num2);
}
else if (questions.operator == "*") {
    console.log("This is Multiple");
    multiply(questions.num1, questions.num2);
}
else if (questions.operator == "/") {
    console.log("This is Division");
    division(questions.num1, questions.num2);
}
else {
    console.log("Invalid Operator");
}
