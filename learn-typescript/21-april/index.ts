//variables

let f_name = "Jahanzaib";
let num1 = 34;

num1 = 45;

const Batch = "Batch-57";

console.log("Hello there i am outer");

// Batch = "dfghjk";

// function

//function  functionName(){}

// declaring a function named greet()
function greet() {
  console.log("Hello there");
}

// function calling
greet();
greet();

// declaring a function named greet()
function greetWithParameter(name: string) {
  console.log("Hello there ", name);
}

greetWithParameter("Jahanzaib");
greetWithParameter("Hassan");
greetWithParameter("Ali");
greetWithParameter("Mubbara");

// function with return statement

function abc() {
  console.log("This is abc function");
  console.log("This is abc function");
  //   return 34;
  console.log("This is abc function");
  console.log("This is abc function");
  console.log("This is abc function");
}

const a = abc();
console.log("🚀 ~ a:", a);

//array ([])
//
let fruit0 = "apple";
let fruit1 = "banana";
let fruit3 = "orange";

// let , const arrayName=[]

// numbers ki array
// stings ki array
// boolean ki array
// null ki array
// same type values
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3];
console.log(fruits);

// print array values (index=0)
// arrayName[index]

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

console.log(numbers[1]);

console.log("Array Length", fruits.length);
// array methods
// push (dynamically  value) add at the end
const arrayLength = fruits.push("grapes");
console.log("🚀 ~ arrayLength:", arrayLength);
fruits.push("grapes2");
fruits.push("grapes1");
fruits.push("grape3");

console.log("After push", fruits);

//pop (delete) form the end
fruits.pop();
fruits.pop();
fruits.pop();
const valueRemove = fruits.pop();
console.log("🚀 ~ valueRemove:", valueRemove);
console.log("After remove", fruits);

// unshift (value add) start of the array
const fruits2 = ["apple", "banana", "orange"];
fruits2.unshift("Mango");
console.log("unshift", fruits2);

fruits2.shift();

console.log("shift", fruits2);

const fruits3 = ["apple", "banana", "orange", "orange2", "orange3"];
console.log("🚀 ~ fruits3:", fruits3);

fruits3.splice(1, 3);

console.log("🚀 ~ fruits3:", fruits3);

fruits3.splice(1, 0, "orange2", "orange4");

console.log("🚀 ~ fruits3:", fruits3);
const fruits4 = ["A", "B", "C"];
fruits4.splice(1, 1, "D", "E");

console.log("🚀 ~ fruits4:", fruits4);
// ['A',"D", "E","C"]

//slice
const fruits5 = ["a", "b", "c", "d", "e"];
console.log("🚀 ~ fruits5:", fruits5.length);

console.log("🚀 ~ fruits5:", fruits5);
const returnArray = fruits5.slice(1, 3);
console.log("🚀 ~ returnArray:", returnArray);
console.log("🚀 ~ fruits5:", fruits5);
