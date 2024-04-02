/* 
try {
  // Some code that might throw an error
} catch (e) {
  console.error("An error occurred: " + e.message);
}
 */

try {
  // Some code that might throw an error
} catch (e) {
  console.error(`An error occurred: ${e.message}`);
}

/* 
In the above ES6 version:
We use backticks (`) for template literals to interpolate the exception message directly into the string.
The console.error statement remains the same.
 */
