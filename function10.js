/* 
function Animal(name) {
  this.name = name;
}
Animal.prototype.sayName = function () {
  console.log("My name is " + this.name);
};
var dog = new Animal("Buddy");
 */

class Animal {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

// Example usage:
const dog = new Animal("Buddy");
dog.sayName(); // Output: "My name is Buddy"

/* 
In the above ES6 version:
We define a class called Animal.
The constructor initializes the name property.
The sayName method logs the message with the animal’s name.
 */
