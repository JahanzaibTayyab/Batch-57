interface Student {
  student_id: number;
  name: string;
}

interface Teacher {
  teacher_Id: number;
  teacher_name: string;
}

type Student1 = {
  student_id: number;
  name: string;
};

type Teacher1 = {
  teacher_Id: number;
  teacher_name?: string;
};

type intersected_type1 = Student1 & Teacher1;

type intersected_type = Student & Teacher;

type nestedType = intersected_type & {
  name: string;
  exp: number;
};

let obj1: intersected_type = {
  student_id: 3232,
  name: "rita",
  teacher_Id: 7873,
  teacher_name: "seema",
};

let obj12: intersected_type1 = {
  student_id: 3232,
  name: "rita",
  teacher_Id: 7873,
};

console.log(obj1.teacher_Id);
console.log(obj1.name);
