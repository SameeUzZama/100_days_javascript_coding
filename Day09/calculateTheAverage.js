// Challenge: Calculate the Average

// Write a function called calculateAverage that takes an
// array of numbers as input and returns the average of those
// numbers.

// Your function should:
// Accept an array of numbers as input.
// Calculate the sum of all the numbers in the array.
// Divide the sum by the total number of elements in the
// array to find the average.
// Return the calculated average.

const calculateAverage = (arr) => {
  const newArr = arr?.reduce((a, c) => a + c, 0);
  return newArr / arr?.length;
};

// Example usage:
console.log(calculateAverage([5, 10, 2, 8])); // Output: 6.25
