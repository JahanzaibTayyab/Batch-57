"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
    //return firstName + " " + lastName;
}
let result1 = buildName("Bob"); //ok
console.log("🚀 ~ result1:", result1);
// Bob
// Bob undefined (correct)
//let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName("Bob", "Adams"); //also ok
console.log("🚀 ~ result3:", result3);
//anonymous function type with optional parameters
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
const buildName3 = (firstName, lastName) => {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
console.log("🚀 ~ buildName3 ~ buildName3:", buildName3("Bob", "Adams"));
const buildName4 = (firstName, lastName) => {
    return lastName ? firstName + " " + lastName : firstName;
};
console.log("🚀 ~ buildName4 ~ buildName4:", buildName4("Bob"));
