//11: Write a function that takes a number as input and returns the sum of its digits.

const sumOfDigits = (num) => {
  let arr = Array.from(String(num), Number)
  return arr?.reduce((a, c) => a + c);
};

// Example usage:
console.log(sumOfDigits(1234)); // Output: 10
console.log(sumOfDigits(4321)); // Output: 10
console.log(sumOfDigits(123456)); // Output: 21

// Constraints:
// The input number will always be a positive integer.
// The input number can have multiple digits.
// The output should be the sum of all the digits in the input number.
