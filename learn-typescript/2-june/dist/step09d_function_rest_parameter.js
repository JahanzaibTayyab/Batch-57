"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildName(firstName, name, lastName, lastName1, lastName2, ...restOfName) {
    console.log("🚀 ~ lastName:", lastName);
    //Named function with Rest parameters
    return firstName + " " + restOfName.join(" %%^&*%$ ");
}
const employeeName = buildName("A");
console.log("🚀 ~ employeeName:", employeeName);
//anonymous function type with Rest parameters
var buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
const buildName4 = (obj) => {
    console.log("🚀 ~ buildName4 ~ obj:", obj);
};
buildName4({
    firstName: "A",
    firstName1: "B",
    rest: ["AD"],
});
let student = {
    name: "Jahanzaib",
    age: 25,
    name1: "Jahanzaib1",
    age1: 40,
    name2: "Jahanzaib2",
    age3: 50,
    name4: "Jahanzai3",
    age5: 60,
};
console.log("🚀 ~ student:", student);
// const age = student.age;
// object destructed
const { age, name } = student;
//object update
student.age = 30;
console.log("🚀 ~ student:", student);
// spread operator
let student2 = {
    ...student,
    age3: 65,
};
console.log("🚀 ~ student2:", student2);
let student4 = {
    ...student,
    age4: 90,
};
console.log("🚀 ~ student4:", student4);
