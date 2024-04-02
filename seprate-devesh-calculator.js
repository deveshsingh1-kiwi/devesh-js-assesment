// Below is a basic calculator program implemented in JavaScript ES6.
// It supports addition, subtraction, multiplication, and division operations.

// Function to perform addition
const add = (a, b) => a + b;

// Function to perform subtraction
const subtract = (a, b) => a - b;

// Function to perform multiplication
const multiply = (a, b) => a * b;

// Function to perform division
const divide = (a, b) => a / b;

// Function to perform modulus operation
const modulus = (a, b) => a % b;

// Main calculator function
const calculator = (operation, a, b) => {
  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return modulus(a, b);
    default:
      return "Invalid operation";
  }
};

// Example usage
const operation = "+";
const num1 = 10;
const num2 = 5;

const result = calculator(operation, num1, num2);
console.log(`Result of ${num1} ${operation} ${num2} = ${result}`);
