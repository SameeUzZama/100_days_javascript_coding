// Write a function arraysAreEqual that takes two arrays
// arr1 and arr2 as input and returns true if the arrays are
// equal (i.e., contain the same elements in the same order),
// and false otherwise.

const arraysAreEqual = (arr1, arr2) => {
  if (arr1?.length !== arr2?.length) {
    return false;
  }
  return arr1.every((c, i) => c === arr2[i]);
};

// Example usage:
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); //Output: true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); //Output: false
console.log(arraysAreEqual([], [])); // Output: true

// Note:
// The function should return false if the arrays have different lengths.
// The function should compare each element of arr1 with
// the corresponding element in arr2.
// The function should return true only if all elements in
// arr1 are equal to their corresponding elements in arr2.
