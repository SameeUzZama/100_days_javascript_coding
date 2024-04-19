// Write a function findMax that takes an array of numbers
// as input and returns the maximum number in the array.

const findMax = (arr) => {
  // 1st way
  //   return arr?.reduce((acc, curr) => {
  //     return acc > curr ? acc : curr;
  //   });
  // 2nd way
  return Math.max(...arr);
};

// Example usage:
console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax([-10, -5, -3, -9, -2])); // Output: -2
console.log(findMax([5])); // Output: 5
