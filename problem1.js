/* Write a function that prints the numbers from 1 to n.
But for multiples of three, print "Fizz" instead of the number,
and for the multiples of five, print "Buzz".
For numbers that are multiples of both three and five, print "FizzBuzz". */

//-----------------------------------------Solution 1 -------------------------------------
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // If the number is not divisible by either 3 or 5, print the number itself
    else {
      console.log(i);
    }
  }
};

// Example usage:
fizzBuzz(15);

//--------------------------- Solution 2- more optimized and scalable ---------------------
const newfizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    let out = ""; // Initialize out as an empty string
    // Check if the number is divisible by 3
    if (i % 3 === 0) out += "Fizz";
    // Check if the number is divisible by 5
    if (i % 5 === 0) out += "Buzz";
    // Check if the number is divisible by 7
    if (i % 7 === 0) out += "devesh";
    // If out is still an empty string, assign i to it
    console.log(out || i);
  }
};
/* 
In this version, each condition is checked independently. 
If a number is divisible by multiple values (such as 3 and 5),
both corresponding strings will be appended to the out variable.
This approach is efficient and concise.
*/

// Example usage:
newfizzBuzz(35);
