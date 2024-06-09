console.log("Before fetchData");
function fetchData(abc) {
    setTimeout(() => {
        //  console.log("I am setTimeout function");
        const data = "Hello i am data from callback";
        abc(data);
    }, 5000);
    // setTimeout(function () {
    //   const data = "Hello i am data from callback";
    //   callback(data);
    // }, 10000);
    // setTimeout(() => {
    //   const data = "Hello, world!";
    //   callback(data); // Call the callback function with the fetched data
    // }, 1000);
}
function handleData(data) {
    console.log(`Received data:  ${data}`);
}
// handleData("Hello i am function");
// handleData("Jahanzaib");
// Call the fetchData function with the handleData callback
fetchData(handleData);
console.log("Fetching data...");
console.log("Fetching data...");
console.log("Fetching data...");
console.log("Fetching data...");
console.log("Fetching data...");
console.log("Fetching data...");
console.log("Fetching data...");
console.log("Fetching data...");
console.log("Fetching data...");
function expectedResult(action, x, y) {
    if (action === "add") {
        return x + y;
    }
    else if (action === "subtract") {
        return x - y;
    }
}
console.log(expectedResult("add", 20, 10));
console.log(expectedResult("subtract", 30, 10));
export {};
//   // const wakeUp = (callback: () => void,callback2: () => void) => {
//   //   console.log("Waking up");
//   //   callback(callback2);
//   // };
//   // const breakfast = (callback: (()=>void) => void) => {
//   //   setTimeout(() => {
//   //     console.log("I ate some cereal");
//   //     callback2()
//   //   }, 5000);
//   // };
//   // const runMachine = () => {
//   //   setTimeout(() => {
//   //     console.log("Running Machine");
//   //   }, 10000);
//   // };
//   // const cleanClothes = () => {
//   //   console.log("Cleaning Cloths");
//   // };
//   // const sunDayRoutine = () => {
//   //   wakeUp(breakfast, runMachine);
//   //   //   breakfast();
//   //   //runMachine();
//   //   cleanClothes();
//   // };
//   // sunDayRoutine();
//   // function
//   function greet(name: string, callback: () => void) {
//     console.log("Hi" + " " + name);
//     callback();
//   }
//   // callback function
//   function callMe() {
//     console.log("I am callback function");
//   }
//   // passing function as an argument
//   greet("Peter", callMe);
