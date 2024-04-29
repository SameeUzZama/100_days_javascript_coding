//*.
//* Interview Question:
//*

//? 15: Write a function to calculate the sum of squares of all elements in an array. For
// example, given the array [1, 2, 3], the function should return 14
// because 1 * 1 + 2 * 2 + 3 * 3 = 1 + 4 + 9 = 14.

const sumOfSquares = (arr) => {
  // 1st way
  // return arr?.reduce((a, c) => (a = a + c * c), 0);

  // 2nd way
  let sum = 0;
  for (let elem of arr) {
    sum = sum + elem * elem;
  }
  return sum;
};

// Example usage:
console.log(sumOfSquares([1, 2, 3])); // Output: 14
