/* Write a function to sort an array of numbers in ascending order without using the
built-in sort() method. */

//----------------------------------Solution-1 ---------------------------------
// Bubble Sort function to sort an array in ascending order
const mybubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

// Example usage:
const originalArray = [76, 23, 45, 12, 54, 9];
console.log("Original Array:", originalArray);
const sortedArray = mybubbleSort(originalArray);
console.log("Sorted Array:", sortedArray);

/* 
In this implementation:
We iterate through the array, comparing adjacent elements.
If the current element is greater than the next element, we swap them.
The process continues until no more swaps are needed (i.e., the array is sorted).
 */

//----------------------------- Solution -2 -----------------------------
const newbubbleSort = (arr) => {
  const length = arr.length;

  // Outer loop for iterating through the array
  for (let i = 0; i < length - 1; i++) {
    // Inner loop for comparing adjacent elements and swapping them if necessary
    for (let j = 0; j < length - 1 - i; j++) {
      // If the current element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements using destructuring assignment
      }
    }
  }

  return arr;
};

// Example usage:
const numbersArr = [15, 3, 8, 1, 2];
console.log("new bubblesort Original Array:", numbersArr);
const sortedNumbers = newbubbleSort(numbersArr);
console.log("new bubblesort sortedNumbers:", sortedNumbers); // Output: [1, 2, 3, 5, 8]
