function startProgram() {
    console.log("Start");
}
function makeMeal(callback, callback1) {
    console.log("Start preparing meal");
    setTimeout(() => {
        console.log("done preparing meal");
        callback(callback1);
    }, 3000);
}
function makeTea(callback) {
    console.log("Start preparing tea");
    setTimeout(() => {
        console.log("done preparing tea");
        callback();
    }, 1000);
}
function washClothes() {
    console.log("Start washing clothes");
    setTimeout(() => {
        console.log("done washing clothes");
        watchTutorials();
    }, 2000);
}
function watchTutorials() {
    console.log("Start watching tutorials");
    setTimeout(() => {
        console.log("done watching tutorials");
        takeNap();
    }, 1000);
}
function takeNap() {
    console.log("Start taking nap");
    setTimeout(() => {
        console.log("done taking nap");
    }, 2000);
}
function endProgram() {
    console.log("Ending program");
}
startProgram();
makeMeal(makeTea, washClothes);
// makeTea(washClothes);
//washClothes();
// watchTutorials();
// takeNap();
endProgram();
export {};
