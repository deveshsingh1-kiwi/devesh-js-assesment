/* 
var numbers = [1, 2, 3, 4, 5];
var squares = [];
for (var i = 0; i < numbers.length; i++) {
  squares.push(numbers[i] * numbers[i]);
}
*/

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number ** 2);
console.log(squares);

/* 
In the above ES6 version:
We use const instead of var to declare the numbers and squares arrays.
This ensures that their values won’t be reassigned accidentally.
The map method is used to create a new array by applying the specified function to each element of the original array.
In this case, we calculate the square of each number using the arrow function number => number ** 2
 */
