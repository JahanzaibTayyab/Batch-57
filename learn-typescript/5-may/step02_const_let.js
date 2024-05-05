"use strict";
//use const where variable values do not change
const a = 5;
const b = 33;
const c = "best";
//let // const a
// let a // declare
// LHS = RHS (LHS variable name) = (Assignment Operator) RHS (Value) (initialization)
// let (value change)
// const (declare + initialization)
//I suggest use let instead of var everywhere,
//becuase let has blocked scope
let z = 6; // 6
if (true) {
    let z = 4; // z=4
    //use z
    console.log("let:z " + z);
}
else {
    let z = "string";
    console.log("let:z " + z);
    //use z
}
console.log("let: " + z); // Error: z is not defined in this scope
