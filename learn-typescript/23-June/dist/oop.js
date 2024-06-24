"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    model;
    year;
    price;
    constructor(model, year, price) {
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
    name;
    age;
    CNIC = 453434;
    gender = "male";
    constructor(name, age) {
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
    occupation;
    constructor(name, age, occupation) {
        super(name, age);
        this.occupation = occupation;
    }
    speak() {
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
    name;
    gender;
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    speak() {
        return `I am speaking`;
    }
}
class Doctor {
    name;
    gender;
    constructor(name, gender) {
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
    model;
    year;
    price;
    color;
    constructor(model, year, price, color) {
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
    checkOil() {
        console.log("🚀 ~ Car2 ~ checkOil ~ checkOil:");
    }
    checkWaterLevel() {
        console.log("🚀 ~ Car2 ~ checkWaterLevel ~ checkWaterLevel:");
    }
    checkPetrol() {
        console.log("🚀 ~ Car2 ~ checkPetrol ~ checkPetrol:");
    }
    checkBatteryCurrent() {
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
    set setColor(color) {
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
