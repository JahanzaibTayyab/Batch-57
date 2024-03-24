// values can be change at any time
// let
// two phase
// 1: Declaration
let firstName;
// 2: Initialization
firstName = "Jahanzaib";

firstName = "zaib";

// values can not be change at any time
//const

const batch = "Batch 57";
//batch = "Batch 52";

// Rules of variables

// not space allowed

//let last Name

let last;
let last2;
let last2$;
let last2$_gfhf;

// let last*;

//let 2end;
let end;
let _end;
let $end;

const end2 = "End 2";
const end2$ = "End 2$";
const _end2$ = "_End 2$";

//comments
// (double forward slash) (Single Line Comment)
//cvhjkl;'
//cvhjkl;
//fghjkl;
//ghjkl;''

// (Multiline Comments) (/*      */)

/*Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? */

// primitive data type

// string

// store text Value

// "Ali" , 'Ali'
let fullName = "Jahanzaib Tayyab_#%&$^W$@^&@$@^";

// numbers
// store numeric values
let age = 25; // integer number

// boolean (true/false)

let condition = true;
condition = false;
// condition = "fghj";

let abc;

console.log(abc);

let nullValue = null;
console.log("🚀 ~ nullValue:", nullValue);

// Type Annotations on Variables
// variable name : data type

let x: string;

//x = 45; // Error

const cv: number = 56;

let myName = "Hello";
console.log("🚀 ~ myName:", myName);
let name1 = "Jahanzaib";
console.log("🚀 ~ name1:", name1);
// out Hello Jahanzaib

let fullName2 = myName + name1;
console.log("🚀 ~ fullName2:", fullName2);

fullName2 = myName + " " + name1;
console.log("🚀 ~ fullName2:", fullName2);

//Template Literals

// (backtick) ``

let fullName4 = "My Name is " + myName + " , " + name1;
let fullName3 = `My Name is ${myName} ,  ${name1} ${cv} `;

console.log("🚀 ~ fullName3:", fullName3);
