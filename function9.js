// function fetchData() {
//     return new Promise(function (resolve, reject) {
//         // Some asynchronous operation
//         if (/* operation successful */) {
//             resolve('Data fetched');
//         } else {
//             reject('Error fetching data');
//         }
//     });
// }

const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Some asynchronous operation
        if (/* operation successful */) {
            resolve('Data fetched');
        } else {
            reject('Error fetching data');
        }
    });
};

/* 
In the above ES6 version:
We use arrow functions for both the outer function (fetchData) and the inner function passed to the Promise constructor.
The resolve function is called when the operation is successful, and the reject function is called when there’s an error.
 */
