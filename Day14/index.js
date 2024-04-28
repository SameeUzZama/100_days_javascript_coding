// 14: Write a function called isPowerOfTwo that takes an integer num as
// input and returns true if num is a power of two, and false otherwise.

const isPowerOfTwo = (num) => {
  let op = false;
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) {
      op = true;
    }
  }
  return op;
};

// Example usage:
console.log(isPowerOfTwo(8)); // Output: true
console.log(isPowerOfTwo(7)); // Output: false

// Notes:
// The input num will be a positive integer.
// Zero (0) and negative integers are not considered powers of two.
// The function should return true if the given number is a power of 2, and false otherwise.
