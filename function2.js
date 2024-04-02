/* 
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  return (
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};
var john = new Person("John", 30);
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const john = new Person("John", 30);
console.log(john.greet()); // Output: Hello, my name is John and I am 30 years old.

/* 
In the above ES6 version:
We use the class syntax to define the Person class.
The constructor method replaces the constructor function, and it initializes the name and age properties.
The greet method is directly defined within the class, making the code more concise and readable.
 */
