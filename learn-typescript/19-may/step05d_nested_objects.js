"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book = {
    name: "This is Book",
    ISBN: "1234567890",
};
console.log(book);
const author = {
    name: "This is Author",
};
console.log(author);
// {name:'This is Author'}
const obj = {
    name: "OBJ",
    type: "nesdted",
    user: {
        name: "Jahanzaib",
        age: 25,
        obj2: {
            name: "OBJ2",
        },
    },
};
console.log(obj);
console.log(obj.name);
console.log(obj.type);
console.log(obj.user);
console.log("User name", obj.user.name);
console.log("OBJ2 name", obj.user.obj2.name);
