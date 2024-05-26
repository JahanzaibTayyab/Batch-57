const enum Color {
  Red1 = 45,
  Green = 45,
  Blue,
} //starts with 0
var c: Color = Color.Green;

const enum Color1 {
  Red = "fdsygchjklwdfghvwejbkfdn,ewjghvfbm",
  Green = 67,
  Blue = "null",
}
//var colorName: string = Color1[2]; //Not allowed with const enums
//console.log(colorName);

const enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
