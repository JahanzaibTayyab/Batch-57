#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var operations_js_1 = require("./operations.js");
var questions = await inquirer_1.default.prompt([
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
    (0, operations_js_1.sum)(questions.num1, questions.num2);
}
else if (questions.operator == "-") {
    console.log("This is Subtract");
    (0, operations_js_1.subtract)(questions.num1, questions.num2);
}
else if (questions.operator == "*") {
    console.log("This is Multiple");
    (0, operations_js_1.multiply)(questions.num1, questions.num2);
}
else if (questions.operator == "/") {
    console.log("This is Division");
    (0, operations_js_1.division)(questions.num1, questions.num2);
}
else {
    console.log("Invalid Operator");
}
