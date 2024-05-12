function sum(num1: number, num2: number) {
  const result = num1 + num2;
  console.log(`Sum  of ${num1} and ${num2} = ${result}`);
}

function subtract(num1: number, num2: number) {
  const result = num1 - num2;
  console.log(`Subtract  of ${num1} and ${num2} = ${result}`);
}

function multiply(num1: number, num2: number) {
  const result = num1 * num2;
  console.log(`Multiply  of ${num1} and ${num2} = ${result}`);
}

function division(num1: number, num2: number) {
  const result = num1 / num2;
  console.log(`Division  of ${num1} and ${num2} = ${result}`);
}

export { sum, subtract, multiply, division };
