/* 
var data = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
var filteredData = data.filter(function (person) {
  return person.age > 30;
});
 */

const data = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

const filteredData = data.filter((person) => person.age > 30);
// Example usage:
console.log(filteredData); // Output: [ { name: 'Bob', age: 35 } ]

/* 
In the above ES6 version:
We use const to declare the data and filteredData variables.
The arrow function (person) => ... serves as the filter condition, checking if the person’s age is greater than 30.
 */
