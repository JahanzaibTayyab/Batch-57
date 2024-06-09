// start
// make a meal
// make a tea
// wash clothes
// watch tutorials
// take a nap
// end
// await (function async)
async function fetchData() {
    await "fghjkl";
}
// arrow
const fetchData1 = async () => {
    await "fghjkl";
};
function startProgram() {
    console.log("Start");
}
function makeMeal(mood) {
    return new Promise((resolve, reject) => {
        console.log("Start preparing meal");
        if (mood) {
            resolve("done preparing meal");
        }
        else {
            reject("not in mood to prepare meal");
        }
    });
}
function makeTea(mood) {
    return new Promise((resolve, reject) => {
        console.log("Start preparing tea");
        if (mood) {
            resolve("done preparing tea");
        }
        else {
            reject("not in mood to prepare tea");
        }
    });
}
function washClothes(mood) {
    return new Promise((resolve, reject) => {
        console.log("Start washing clothes");
        if (mood) {
            resolve("done washing clothes");
        }
        else {
            reject("not in mood to wash clothes");
        }
    });
}
function watchTutorials(mood) {
    return new Promise((resolve, reject) => {
        console.log("Start watching tutorials");
        if (mood) {
            resolve("done  watching tutorials");
        }
        else {
            reject("not in mood to  watch tutorials");
        }
    });
}
function takeNap(mood) {
    return new Promise((resolve, reject) => {
        console.log("Start taking nap");
        if (mood) {
            resolve("done taking nap");
        }
        else {
            reject("not in mood to take nap");
        }
    });
}
function endProgram() {
    console.log("Ending program");
}
startProgram();
// makeMeal(true)
//   .then((result) => {
//     console.log(result);
//     return makeTea(true);
//   })
//   .then((result) => {
//     console.log(result);
//     return washClothes(true);
//   })
//   .then((result) => {
//     console.log(result);
//     return watchTutorials(false);
//   })
//   .then((result) => {
//     console.log(result);
//     return takeNap(true);
//   })
//   .catch((error) => {
//     console.log("error " + error);
//   })
//   .finally(() => {
//     endProgram();
//   });
const resultMakeMeal = await makeMeal(true);
const resultMakeMeal1 = await makeTea(true);
console.log("🚀 ~ resultMakeMeal1:", resultMakeMeal1);
console.log("🚀 ~ resultMakeMeal:", resultMakeMeal);
export {};
