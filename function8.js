/* 
function doubleAndFilter(numbers) {
  var doubled = numbers.map(function (num) {
    return num * 2;
  });
  return doubled.filter(function (num) {
    return num % 3 === 0;
  });
}
 */

const doubleAndFilter = (numbers) => {
  const doubled = numbers.map((num) => num * 2);
  return doubled.filter((num) => num % 3 === 0);
};
// Example usage:
const inputNumbers = [1, 2, 3, 4, 5];
const result = doubleAndFilter(inputNumbers);
console.log(result); // Output: [6]

/* 
In the above ES6 version:
We use arrow functions (=>) for both the map and filter operations.
 */
