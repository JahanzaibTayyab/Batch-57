````markdown
# TypeScript Fundamentals Assignment Solutions

## Overview

This document provides solutions for the TypeScript assignment designed to test your understanding of TypeScript fundamentals including console logging, variables, data types, operators, conditional statements, functions, arrays, array methods, and loops.

## Instructions

- Review each question and its corresponding solution to understand the implementation details.
- Test these solutions in your TypeScript environment to see how they work.
- Use these examples as a learning tool to improve your TypeScript coding skills.

## Solutions

### Easy

1. **Hello World Script**
   ```typescript
   console.log("Hello, World!");
   ```
````

2. **Check Temperature**

   ```typescript
   let temperature: number = 15;
   if (temperature < 20) {
     console.log("It's cold!");
   }
   ```

3. **Simple Arithmetic**

   ```typescript
   let apples: number = 10;
   apples -= 3; // giving away 3 apples
   console.log(apples); // logs 7
   ```

4. **Concatenate Names**

   ```typescript
   let firstName: string = "John";
   let lastName: string = "Doe";
   let fullName: string = `${firstName} ${lastName}`;
   console.log(fullName);
   ```

5. **Comparison Operator**
   ```typescript
   let number: number = 5;
   console.log(number > 3 ? "Yes" : "No");
   ```

### Medium

6. **Calculate Circle Area**

   ```typescript
   function calculateArea(radius: number): number {
     return Math.PI * radius * radius;
   }
   ```

7. **Fizz Buzz Loop**

   ```typescript
   for (let i = 1; i <= 50; i++) {
     if (i % 3 === 0) console.log("Fizz");
     else if (i % 5 === 0) console.log("Buzz");
     else console.log(i);
   }
   ```

8. **Highest Temperature**

   ```typescript
   let temperatures: number[] = [23, 13, 29, 21, 19];
   let highest: number = temperatures[0];
   for (let temp of temperatures) {
     if (temp > highest) highest = temp;
   }
   console.log(highest);
   ```

9. **Check Age**

   ```typescript
   let age: number = parseInt(prompt("Enter your age:"));
   console.log(age < 18 ? "Minor" : "Adult");
   ```

10. **Count Positive Numbers**
    ```typescript
    function countPositives(numbers: number[]): number {
      return numbers.filter((num) => num > 0).length;
    }
    ```

### Arrays and Array Methods

11. **Filter Words Starting with 'a'**

    ```typescript
    function filterWords(words: string[]): string[] {
      return words.filter((word) => word.startsWith("a"));
    }
    ```

12. **Log Second to Last Element**

    ```typescript
    let fruits: string[] = ["apple", "banana", "cherry", "date"];
    console.log(fruits[fruits.length - 2]);
    ```

13. **Square Numbers**

    ```typescript
    function squareNumbers(numbers: number[]): number[] {
      return numbers.map((num) => num * num);
    }
    ```

14. **Reverse Array**

    ```typescript
    function reverseArray(elements: any[]): any[] {
      let reversed: any[] = [];
      for (let i = elements.length - 1; i >= 0; i--) {
        reversed.push(elements[i]);
      }
      console.log(reversed);
      return reversed;
    }
    ```

15. **Log Score Changes**

    ```typescript
    function logScoreChanges(scores: number[]): void {
      let max = scores[0];
      let min = scores[0];
      let maxChanges = 0;
      let minChanges = 0;
      scores.forEach((score) => {
        if (score > max) {
          max = score;
          maxChanges++;
        }
        if (score < min) {
          min = score;
          minChanges++;
        }
      });
      console.log(
        `Max score changes: ${maxChanges}, Min score changes: ${minChanges}`
      );
    }
    ```

16. **Remove Falsey Values**

    ```typescript
    function removeFalsey(values: any[]): any[] {
      return values.filter(Boolean);
    }
    ```

17. **Concatenate Arrays**
    ```typescript
    let array1: number[] = [1, 2, 3];
    let array2: number[] = [4, 5, 6];
    ```

let concatenated: number[] = array1.concat(array2);
console.log(concatenated);

````

18. **Sum of Even or Odd Elements**

    ```typescript
    function sumOfElements(numbers: number[], type: "even" | "odd"): number {
      return numbers
        .filter((num) => (type === "even" ? num % 2 === 0 : num % 2 !== 0))
        .reduce((acc, curr) => acc + curr, 0);
    }
    ```

19. **Check Element Existence**

    ```typescript
    function elementExists(elements: any[], element: any): number {
      return elements.indexOf(element);
    }
    ```

20. **Find Smallest Number**
    ```typescript
    function findSmallest(numbers: number[]): number {
      return Math.min(...numbers);
    }
    ```

### Functions

21. **Calculate Product**

    ```typescript
    function calculateProduct(numbers: number[]): number {
      return numbers.reduce((acc, num) => acc * num, 1);
    }
    ```

22. **Filter by Length**

    ```typescript
    function filterByLength(strings: string[], minLength: number): string[] {
      return strings.filter((s) => s.length > minLength);
    }
    ```

23. **Find Duplicates**

    ```typescript
    function findDuplicates(items: any[]): any[] {
      const seen = new Set();
      const duplicates = new Set();
      items.forEach((item) => {
        if (seen.has(item)) duplicates.add(item);
        seen.add(item);
      });
      return Array.from(duplicates);
    }
    ```

24. **Increment All Elements**

    ```typescript
    function incrementAll(numbers: number[]): number[] {
      return numbers.map((num) => num + 1);
    }
    ```

25. **Count Occurrences**

    ```typescript
    function countOccurrences(elements: any[], target: any): number {
      return elements.filter((e) => e === target).length;
    }
    ```

26. **Check If Array Is Sorted**

    ```typescript
    function isSorted(numbers: number[]): boolean {
      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i - 1] > numbers[i]) return false;
      }
      return true;
    }
    ```

27. **Format Names**

    ```typescript
    function formatNames(names: string[]): string {
      if (names.length < 2) return names.join("");
      return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
    }
    ```

28. **Convert Fahrenheit to Celsius**

    ```typescript
    function convertToFahrenheit(temperatures: number[]): number[] {
      return temperatures.map((temp) => ((temp - 32) * 5) / 9);
    }
    ```

29. **Calculate Min, Max, and Average**

    ```typescript
    function minMaxAverage(numbers: number[]): {
      min: number;
      max: number;
      average: number;
    } {
      const min = Math.min(...numbers);
      const max = Math.max(...numbers);
      const average =
        numbers.reduce((sum, current) => sum + current, 0) / numbers.length;
      return { min, max, average };
    }
    ```

30. **Swap Array Elements**
    ```typescript
    function swapElements<T>(
      elements: T[],
      index1: number,
      index2: number
    ): T[] {
      let temp = elements[index1];
      elements[index1] = elements[index2];
      elements[index2] = temp;
      return elements;
    }
    ```

### Hard

31. **Count Character Occurrences**

    ```typescript
    function countCharacter(str: string, char: string): number {
      return str.split("").filter((c) => c === char).length;
    }
    ```

32. **Log Uncompleted Tasks**

    ```typescript
    interface Task {
      task: string;
      completed: boolean;
    }

    function logUncompleted(tasks: Task[]): void {
      tasks
        .filter((task) => !task.completed)
        .forEach((task) => console.log(task.task));
    }
    ```

33. **Sort Array**

    ```typescript
    function sortArray(numbers: number[]): number[] {
      return numbers.sort((a, b) => a - b);
    }
    ```

34. **Reverse Array Without Reverse Method**

    ```typescript
    function reverseArray<T>(elements: T[]): T[] {
      let reversed: T[] = [];
      for (let i = elements.length - 1; i >= 0; i--) {
        reversed.push(elements[i]);
      }
      return reversed;
    }
    ```

35. **Simple Calculator**
    ```typescript
    function calculator(
      operand1: number,
      operand2: number,
      operator: string
    ): number {
      switch (operator) {
        case "+":
          return operand1 + operand;
        case "-":
          return operand1 - operand2;
        case "*":
          return operand1 * operand2;
        case "/":
          return operand2 !== 0 ? operand1 / operand2 : NaN;
        default:
          return NaN;
      }
    }
    ```

## Testing

Ensure you test each function and script to verify correct functionality within your TypeScript development environment.

````

```

```
