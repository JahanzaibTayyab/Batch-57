enum Color {
  Red,
  Green,
  Blue,
} //starts with 0

enum StudentStatus {
  Active = "active",
  Inactive = "inactive",
  DropOut = "dropOut",
}

let student = {
  id: 1,
  name: "Zaib",
  status: StudentStatus.Active,
};

if (student.status === StudentStatus.Active) {
} else if (student.status === StudentStatus.Inactive) {
}
let c: Color = Color.Green;
//c = "67";
console.log("🚀 ~ c:", c);

enum Color1 {
  Red = 1,
  Green,
  Blue,
}
// enum declare without const // [value] => key
let colorName: string = Color1[2];
console.log(colorName);

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
let colorIndex: number = Color2["Blue"];
console.log(colorIndex);
