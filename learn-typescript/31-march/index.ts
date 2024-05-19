// operators

//arithmetic
// -addition
let x: number = 2;
let y: number = 5;

let fname$ = "h";

let array = [1, 2, 3, 4];
array.push(5);

let array2 = ["A", "B", "C", "D"];
array2.push("E");

let add = x + y; //7
let add1 = "x" + "y"; //xy
let add2 = "xy" + x + y; //xy25
let add3 = "xy" + add; //xy7
let add4 = x + y + "xy"; //7xy
let add5 = x + y + "xy" + x; //7xy2
// let add6: number = x + "xy";
// let add7: number = "xy"+x;
let add8: string = x + "xy";
let add9: string = "xy" + x;

console.log("add: ", add);
console.log("add1: ", add1);
console.log("add2: ", add2);
console.log("add3: ", add3);
console.log("add4: ", add4);
console.log("add5: ", add5);

// -subtraction
let sub = x - y; //-3
// let sub1 = x - "y"; //error
// let sub2 = "x" - 2; //error
console.log("sub: ", sub);

// -multiplication
let multiplication = x * y; //10
// let mult1 = "x" * y; //error
console.log("multiplication: ", multiplication);

// -division
let div = x / y; //0.4
// let div1 = "x"/y; //error
console.log("div: ", div);

// -exponentiation
let exp = x ** y; //32
console.log("exp: ", exp);

//assignment (=)

let n = 5;

n += 15; //n=n+15 // 20
// increment (++) /decrement operators  -- ,
n++; // n=n+1
// n=21
n--; // n = n-1
// n =20
n = n + 2; //22

n -= 5; //17 n = n+5
n = -5; //12

//comparison
n = 5;
//== (values compare)
n == 5; //true
//===  (data type and value compare)
// 5=5 (number=number and 5==5) //true
let x1 = "5";
let y1 = 5;

//x1 == y1; //true;
//x1 === y1; // false, because one is a string and the other is

// not equal  (!=),
n;
n != 5; // true
n = 7;
//greater than(>),
n > 8; //  7 greater than 8 //false

//less than (<)
n < 8; // 7 less than 8 //true

//greater than or equal (>=)
n >= 8; // 7 greater than or equal to 8 // false

//less than or equal (<=)
n <= 7; // 7 less than or equal to 7 // true

//logical (AND , OR , NOT)

// OR (||)
// T || F = T
// F || T = T
// T || T = T
// F || F = F

//n =7

console.log(n == 5 || n == 6); // false
console.log(n == 5 || n >= 6); // true F || T = T

// AND (&&)

// T && T = T
// F && T = F
// T && F = F
// F && F = F

console.log(n >= 5 && n <= 8);
// n=5 // true
// n= 6 // true
// n= 7 // true
// n=8 // true
//n =9 // false

// Not (!)
// T = F
// F = T

console.log(!(n >= 5 && n <= 8));
// ! true // false
// n=5 // false
// n= 6 //false
// n= 7 //false
// n=8 // false
//n =9 // true

// conditional  Statement

// if(condition){}
// else {}

let condition = "Pakistan";
let age = 25;
// Pakistan == Pakistan // true
if (condition == "pakistan") {
  console.log("Pakistani");
} else {
  console.log("Not Pakistani");
}

// if else if

if (age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

// odd and even

// n = 5
n = 6;
let result = n % 2; // 6%2 // 0
if (result == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
