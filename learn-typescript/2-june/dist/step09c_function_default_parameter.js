"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName, lastName = "Khan") {
    return firstName + " " + lastName;
}
let result1 = buildName("Bob"); //works correctly because last parameter is optional
console.log("🚀 ~ result1:", result1);
//let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
let result3 = buildName("Bob", "Adams"); //correct
console.log("🚀 ~ result3:", result3);
//anonymous function type with defult parameters
//(Note that the parameter type will be optional when used with defult value)
let buildName1 = function (firstName, lastName = "Khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
const buildName3 = (firstName, lastName = "Khan") => {
    return `${firstName} ${lastName}`;
};
