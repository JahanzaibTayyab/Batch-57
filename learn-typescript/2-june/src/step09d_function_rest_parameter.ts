function buildName(
  firstName: string,
  name?: string,
  lastName?: string,
  lastName1?: string,
  lastName2?: string,
  ...restOfName: string[]
) {
  console.log("🚀 ~ lastName:", lastName);
  //Named function with Rest parameters
  return firstName + " " + restOfName.join(" %%^&*%$ ");
}

const employeeName = buildName("A");
console.log("🚀 ~ employeeName:", employeeName);

//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string = function (
  firstName: string,
  ...restOfName: string[]
) {
  return firstName + " " + restOfName.join(" ");
};

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list

type BuildName = {
  firstName: string;
  lastName?: string;
  lastName1?: string;
  lastName2?: string;
  lastName3?: string;
  firstName1: string;
  rest: Array<string>;
};

const buildName4 = (obj: BuildName) => {
  console.log("🚀 ~ buildName4 ~ obj:", obj);
};

buildName4({
  firstName: "A",
  firstName1: "B",
  rest: ["AD"],
});

let student = {
  name: "Jahanzaib",
  age: 25,
  name1: "Jahanzaib1",
  age1: 40,
  name2: "Jahanzaib2",
  age3: 50,
  name4: "Jahanzai3",
  age5: 60,
};

console.log("🚀 ~ student:", student);

// const age = student.age;

// object destructed

const { age, name } = student;

//object update
student.age = 30;

console.log("🚀 ~ student:", student);

// spread operator

let student2 = {
  ...student,
  age3: 65,
};

console.log("🚀 ~ student2:", student2);

let student4 = {
  ...student,
  age4: 90,
};

console.log("🚀 ~ student4:", student4);
