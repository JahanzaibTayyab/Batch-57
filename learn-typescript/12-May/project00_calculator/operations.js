"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.division = exports.multiply = exports.subtract = exports.sum = void 0;
function sum(num1, num2) {
    var result = num1 + num2;
    console.log("Sum  of ".concat(num1, " and ").concat(num2, " = ").concat(result));
}
exports.sum = sum;
function subtract(num1, num2) {
    var result = num1 - num2;
    console.log("Subtract  of ".concat(num1, " and ").concat(num2, " = ").concat(result));
}
exports.subtract = subtract;
function multiply(num1, num2) {
    var result = num1 * num2;
    console.log("Multiply  of ".concat(num1, " and ").concat(num2, " = ").concat(result));
}
exports.multiply = multiply;
function division(num1, num2) {
    var result = num1 / num2;
    console.log("Division  of ".concat(num1, " and ").concat(num2, " = ").concat(result));
}
exports.division = division;
