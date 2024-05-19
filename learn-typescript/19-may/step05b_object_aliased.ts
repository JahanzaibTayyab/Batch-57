// anonymous

let f_name: string; // variable declare
f_name = "Zia"; //

let teacher: {
  name: string;
  exp: number;
};

teacher = {
  name: "Zeeshan",
  exp: 10,
};
console.log(teacher.name);

// Aliased Object Type (type // interface)
// type

type Teacher = {
  name: string;
  exp: number;
};

let teacher2: Teacher = {
  name: "Jahanzaib",
  exp: 4,
};

let teacher3: Teacher = {
  name: "Jahanzaib",
  exp: 4,
};

let teacher4: Teacher = {
  name: "Jahanzaib",
  exp: 4,
};

type Student = {
  name: string;
  age?: number;
};

let student: Student = {
  name: "Hira",
  age: 30,
};

let student2: Student = {
  name: "Hira",
};

console.log(student["name"]);
console.log(student.age);

// Interfaces

interface Manager {
  name: string;
  subordiates?: number;
}

let storeManager: Manager = {
  name: "Bilal",
  subordiates: 40,
};
