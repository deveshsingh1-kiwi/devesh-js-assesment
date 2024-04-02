/* 
var module = (function () {
  var privateVar = 10;
  function privateFunction() {
    return privateVar;
  }
  return {
    getPrivateVar: privateFunction,
  };
})();
 */

const myModule = (() => {
  const privateVar = 10;

  const getPrivateVar = () => {
    return privateVar;
  };

  return {
    getPrivateVar,
  };
})();

// Example usage:
console.log(myModule.getPrivateVar()); // Output: 10

/* 
In the above ES6 version:
We use const instead of var to declare privateVar and getPrivateVar.
The arrow function getPrivateVar directly returns the value of privateVar.
The lexical scoping ensures that privateVar is accessible only within the module.
 */
