// start
// make a meal
// make a tea
// wash clothes
// watch tutorials
// take a nap
// end
function startProgram() {
    console.log("Start");
}
function makeMeal() {
    console.log("Start preparing meal");
    setTimeout(() => {
        console.log("done preparing meal");
    }, 3000);
}
function makeTea() {
    console.log("Start preparing tea");
    setTimeout(() => {
        console.log("done preparing tea");
    }, 1000);
}
function washClothes() {
    console.log("Start washing clothes");
    setTimeout(() => {
        console.log("done washing clothes");
    }, 2000);
}
function watchTutorials() {
    console.log("Start watching tutorials");
    setTimeout(() => {
        console.log("done watching tutorials");
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
makeMeal();
makeTea();
washClothes();
watchTutorials();
takeNap();
endProgram();
export {};
