//Note: All parameters are required

//Named function
function add(x: number, y: number): number {
  return x + y;
}

// es2015
// arrow function (block scope)

// const functionName = () => {}

const add1 = (x: number, y: number): number => {
  return x + y;
};

console.log(add1(5, 6));

//Anonymous function
let myAdd1 = function (x: number, y: number): number {
  console.log("a");
  console.log("a");
  console.log("a");
  console.log("a");
  console.log("a");
  return x + y;
};

console.log(myAdd1(5, 6));

let xyz: string;
xyz = "4";

//Anonymous function with explict type
let myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

//type names dont matter
let myAdd3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

//Lambda functions (pure function)
let myAdd4 = (a: number, b: number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  //fn();
  //....
}

greeter(function (a: string) {
  console.log(a);
});
