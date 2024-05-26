let myname: any = "Zia";
console.log(myname);
// Output: Zia
// as word
console.log(typeof myname);

let x: unknown = "hello";
console.log((x as string).length);
//myname as number;
myname = 6; // narrowing
console.log(typeof myname);

// <data type>
//console.log((myname as string).length);
console.log((<string>myname).length);

// number to string
// string to number

let abc = 5;
console.log(abc as unknown as string);

let xyz = "12A3";

console.log(xyz as unknown as number);

console.log(<number>(<unknown>xyz));

function fun1(value: number) {}
fun1(abc);
fun1(xyz as unknown as number);

let value = "42";
let numberValue = 45;
