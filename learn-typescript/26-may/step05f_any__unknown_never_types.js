"use strict";
// Any
Object.defineProperty(exports, "__esModule", { value: true });
let myval;
myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => {
    console.log("Hey again!");
}; // OK
//Unknown
let value;
value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => {
    console.log("Hey again!");
}; // OK
// Assigning a value of type unknown to variables of other types
let val;
const val1 = val; // OK
const val2 = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error
// Never
function abc() { }
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
//console.log(error("This is Error Message"));
// Inferred return type is never
function fail() {
    return error("Something failed");
}
fail();
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
