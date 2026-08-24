const myArr = [1, 2, 3, 4, 5];

function calculate(array, callback) {
  let result = array[0];

  for (let index = 1; index < array.length; index++) {
    result = callback(result, array[index]);
  }

  return result;
}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

const sumResult = calculate(myArr, sum);
const multiplyResult = calculate(myArr, multiply);
const subtractResult = calculate(myArr, subtract);

console.log("Sum:", sumResult);
console.log("Multiply:", multiplyResult);
console.log("Subtract:", subtractResult);
