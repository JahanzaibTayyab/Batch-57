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
    return new Promise((resolve, reject) => {
        console.log("Start preparing meal");
        setTimeout(() => {
            resolve("done preparing meal");
        }, 3000);
    });
}
function makeTea() {
    return new Promise((resolve, reject) => {
        console.log("Start preparing tea");
        setTimeout(() => {
            resolve("done preparing tea");
        }, 2000);
    });
}
function washClothes() {
    return new Promise((resolve, reject) => {
        console.log("Start washing clothes");
        setTimeout(() => {
            resolve("done washing clothes");
        }, 3000);
    });
}
function watchTutorials() {
    return new Promise((resolve, reject) => {
        console.log("Start watching tutorials");
        setTimeout(() => {
            resolve("done watching tutorials");
        }, 1000);
    });
}
function takeNap() {
    return new Promise((resolve, reject) => {
        console.log("Start taking nap");
        setTimeout(() => {
            resolve("done taking nap");
        }, 2000);
    });
}
function endProgram() {
    console.log("Ending program");
}
startProgram();
//promise chaining
makeMeal()
    .then((result) => {
    console.log(result);
    return makeTea();
})
    .then((result) => {
    console.log(result);
    return washClothes();
})
    .then((result) => {
    console.log(result);
    return watchTutorials();
})
    .then((result) => {
    console.log(result);
    return takeNap();
})
    .then((result) => {
    console.log(result);
    return endProgram();
})
    .finally(() => {
    console.log("finally");
});
export {};
