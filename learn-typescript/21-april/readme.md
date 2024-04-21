# TypeScript Basics Tutorial

This README provides a beginner-friendly guide to understanding basic concepts in TypeScript including functions, parameters, return statements, and arrays. Here's what we cover:

## Table of Contents

- [1. Functions in TypeScript](#1-functions-in-typescript)
  - [Defining a Function](#defining-a-function)
  - [Parameters](#parameters)
  - [Return Statement](#return-statement)
- [2. Arrays in TypeScript](#2-arrays-in-typescript)
  - [Basic Array Declaration](#basic-array-declaration)
  - [Common Array Methods](#common-array-methods)
- [3. Practical Example with Array and Functions](#3-practical-example-with-array-and-functions)

## 1. Functions in TypeScript

### Defining a Function

You can define a function in TypeScript using the `function` keyword. Here's a simple example:

```typescript
function greet(name: string): string {
  return "Hello, " + name + "!";
}
```

### Parameters

Parameters are the values you pass to the function, defined with types in TypeScript:

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

### Return Statement

Functions in TypeScript can return a value specified with a return type:

```typescript
function isEven(num: number): boolean {
  return num % 2 === 0;
}
```

## 2. Arrays in TypeScript

### Basic Array Declaration

Arrays in TypeScript are defined by the type of their elements:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

### Common Array Methods

Here are some methods you can use on arrays:

- **push()**
- **pop()**
- **slice()**
- **forEach()**
- **map()**

## 3. Practical Example with Array and Functions

Combining functions and arrays in TypeScript:

```typescript
function getLengths(items: string[]): number[] {
  return items.map((item) => item.length);
}

let fruits = ["Apple", "Banana", "Cherry"];
let lengths = getLengths(fruits);
console.log(lengths);
```

## Conclusion

We hope this guide helps you get started with TypeScript by understanding its core concepts such as functions and arrays. Happy coding!
