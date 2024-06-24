class Car {
  model: string;
  year: number;
  price: string;
  constructor(model: string, year: number, price: string) {
    this.model = model;
    this.year = year;
    this.price = price;
  }
  drive() {
    console.log("The Car has Started driving");
  }

  stop() {
    console.log("The car has stopped");
  }
}

const tesla = new Car("Model X", 2022, "$114,990");
console.log("🚀 ~ tesla:", tesla);

tesla.year = 2024;
console.log("🚀 ~ tesla:", tesla);

// oop
// Inheritance (subclass(name) extends superclass(name))

class Person {
  name: string;
  age: number;
  private CNIC = 453434;
  protected gender = "male";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`What's for dinner?`);
  }

  speak() {
    console.log(`My name is ${this.name}, I am ${this.age} years old`);
  }
}

const person = new Person("Jahanzaib", 26);
//console.log(person.speak());

// extends

class Chef extends Person {
  occupation: string;
  constructor(name: string, age: number, occupation: string) {
    super(name, age);
    this.occupation = occupation;
  }

  speak(): void {
    super.speak();
    console.log(`I am a ${this.occupation}`);
  }

  cook() {
    console.log(`I am cooking`);
  }
}

const chef = new Chef("Jahanzaib", 26, "Chef");

chef.cook();
chef.eat();
chef.speak();

class Human {
  name: string;
  gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }

  speak() {
    return `I am speaking`;
  }
}

class Doctor implements Human {
  name: string;
  gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }

  speak() {
    return "I am a doctor";
  }
}

const doctor = new Doctor("Jahanzaib", "male");
doctor.speak();

class Car2 {
  model: string;
  year: number;
  price: string;
  private color: string;
  constructor(model: string, year: number, price: string, color: string) {
    this.model = model;
    this.year = year;
    this.price = price;
    this.color = color;
  }
  drive() {
    console.log("The Car has Started driving");
  }

  stop() {
    console.log("The car has stopped");
  }

  private checkOil() {
    console.log("🚀 ~ Car2 ~ checkOil ~ checkOil:");
  }

  private checkWaterLevel() {
    console.log("🚀 ~ Car2 ~ checkWaterLevel ~ checkWaterLevel:");
  }

  private checkPetrol() {
    console.log("🚀 ~ Car2 ~ checkPetrol ~ checkPetrol:");
  }

  private checkBatteryCurrent() {
    console.log("🚀 ~ Car2 ~ checkBatteryCurrent ~ checkBatteryCurrent:");
  }

  startCar() {
    this.checkOil();
    this.checkWaterLevel();
    this.checkPetrol();
    this.checkBatteryCurrent();
    this.drive();
  }

  //getter & setter
  get getColor() {
    return this.color;
  }

  set setColor(color: string) {
    this.color = color;
  }
}

const car2 = new Car2("Tesla", 2024, "$456789320", "Black");
console.log("🚀 ~ car2:", car2);

console.log(car2.startCar());

car2.year = 2025;
console.log(car2.getColor);

car2.setColor = "Red";

console.log("🚀 ~ car2:", car2);
