"use strict";
// console.log("Name");
// console.log("Name");
// console.log("Name");
// console.log("Name");
// console.log("Name");
// console.log("Name");
// console.log("Name");
// console.log("Name");
// console.log("Name");
// console.log("Name");
// console.log("Name");
// loop
// do while (condition) // phly 1 dfa run hota  hai, condition ko  bad my check krta ha
// while (con) {} // phly condition (true) {} // false
// for
// for(exp1 ; exp2 ; exp3){}
// exp1 : starting condition (let variable = 0)
// exp2: ending  condition (variable < 5)
// exp3: starting condition (increment) (i++ i--)
for (let x = 5; x < 10; x += 2) {
    console.log("Loop", x);
}
// x=5 ; Loop 5 ; x+=2 (x=7)
// x=7  ; Loop 7 ; x+=2 (x=9)
// x=9 ; Loop 9 : x+=2 (x=11)
// x= 11 false
// step 1 : condition (check)
//  step 2 : true  -> body execute ho jaye ga
//  step3 : increment (exp3)
// x = 0  (true) ;  Loop   0 ; x=1
// x=1  (true) ; Loop 1 ; x++ (x=2)
//  x =2 (true) ;  Loop 2 ; x++ (x=3)
// x=3  (true) : Loop 3 : x++  (x=4)
// x= 4 (true); Loop 4 ; x++ (x=5)
// x=5   (false): Loop Break Ho Gaya
const array = ["a", "b", "c", "d", "e"];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
for (let x = 0; x < array.length; x++) {
    console.log("This is For Loop");
    console.log(array[x]);
}
function printTable(input) {
    for (let x = 1; x <= 10; x++) {
        console.log(`${input}  *  ${x}   =  ${input * x}`);
    }
}
printTable(2);
printTable(5);
printTable(15);
printTable(19);
// array
// non-preemptive
// JS (arrays, objects)
// at a time u can store multiple values
// array
// syntax  []
// arrayName = [2,3,4,5,6,7,8,9,10]
// index =0
// arrayName[index]
// arrayName[0] //2
//arrayName[9] // undefined
const arrayName = ["a"];
//Q7
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
// Q10
const numberArrays = [1, 2, 3, 4, 5, -6, -7, -8, 0, 100];
const checkNumberPositive = (numberArray) => {
    let count = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
            count = count + 1;
        }
    }
    return count;
};
console.log("count", checkNumberPositive(numberArrays));
