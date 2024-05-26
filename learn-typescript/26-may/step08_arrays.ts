let array1: number[] = [5, 6, 7]; //correct syntax
console.log(array1[1]); //correct syntax // value print
let array2: Array<number> = [1, 2, 3]; //alternative correct syntax
let array3: number[] = []; //correct syntax to define an empty array

//let array4: number[] = new number[2](); //error

let array5: number[] = [];
array5.push(1234); //dynamically adding

const array6: number[][] | string[][] = [
  [12, 34, 6],
  [23, 56, 7],
];

const rsqtye = [5, "6", 56];
const array644r: number[][] | string[][] = [
  ["12", "34", "6"],
  ["23", "56", "7"],
];

console.log(array6[1]); //[23,56,7]
console.log(array6[1][0]); //23
console.log("🚀 ~ array6:", array6);

const array7 = array6.flat();
console.log("🚀 ~ array7:", array7);

const array78 = [12, 45, 6, 7];

const array67 = array7.concat(array78);
console.log("🚀 ~ array67:", array67);

console.log(array67.join(" %^*%%& "));
