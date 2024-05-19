let teacher = {
  name: "Zeeshan",
  experience: "10",
  active: true,
};

console.log(teacher.name);
console.log(teacher["experience"]);

let f_name: string;
f_name = "Jahanzaib";
// Type Declaration
let student: {
  name: string;
  age: number | undefined;
};

student = {
  age: undefined,
  name: "Hira",
};

let student1: {
  name: string;
  age: number | undefined;
};

student1 = {
  age: undefined,
  name: "Hira",
};

console.log(student["name"]);
console.log(student.age);
