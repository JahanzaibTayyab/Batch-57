"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let array1 = [5, 6, 7]; //correct syntax
console.log(array1[1]); //correct syntax // value print
let array2 = [1, 2, 3]; //alternative correct syntax
let array3 = []; //correct syntax to define an empty array
//let array4: number[] = new number[2](); //error
let array5 = [];
array5.push(1234); //dynamically adding
const array6 = [
    [12, 34, 6],
    [23, 56, 7],
];
console.log("🚀 ~ array6:", array6);
const array7 = array6.flat();
console.log("🚀 ~ array7:", array7);
const array78 = [12, 45, 6, 7];
const array67 = array7.concat(array78);
console.log("🚀 ~ array67:", array67);
console.log(array67.join(" %^*%%& "));
