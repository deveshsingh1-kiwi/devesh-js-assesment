/* 
document.getElementById("myButton").onclick = function (event) {
  console.log("Button clicked");
};
 */

document.getElementById("myButton").onclick = (event) => {
  console.log("Button clicked");
};

/* 
In the above ES6 version:
The arrow function (event) => {...} serves as the event handler for the button click,
and it logs the message to the console when the button is clicked.
 */
