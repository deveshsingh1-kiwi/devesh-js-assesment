/* 
function fetchData(callback) {
  setTimeout(function () {
    callback("Data fetched");
  }, 1000);
}
 */

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
};

// Example usage:
fetchData().then((result) => {
  console.log(result); // Output: Data fetched
});

/* 
In the above ES6 version:
We use an arrow function for fetchData.
Instead of a callback, we create a Promise that resolves after the specified timeout.
The then method is used to handle the resolved value (in this case, the message “Data fetched”).
 */
