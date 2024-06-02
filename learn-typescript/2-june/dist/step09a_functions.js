"use strict";
//Note: All parameters are required
Object.defineProperty(exports, "__esModule", { value: true });
//Named function
function add(x, y) {
    return x + y;
}
// es2015
// arrow function (block scope)
// const functionName = () => {}
const add1 = (x, y) => {
    return x + y;
};
console.log(add1(5, 6));
//Anonymous function
let myAdd1 = function (x, y) {
    console.log("a");
    console.log("a");
    console.log("a");
    console.log("a");
    console.log("a");
    return x + y;
};
console.log(myAdd1(5, 6));
let xyz;
xyz = "4";
//Anonymous function with explict type
let myAdd2 = function (x, y) {
    return x + y;
};
//type names dont matter
let myAdd3 = function (x, y) {
    return x + y;
};
//Lambda functions (pure function)
let myAdd4 = (a, b) => a + b;
function greeter(fn) {
    //fn();
    //....
}
greeter(function (a) {
    console.log(a);
});
