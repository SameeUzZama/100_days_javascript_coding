//*.
//* Interview Question: Count Occurrences of Character
//*.

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character
// to count. The function should return the number of times the specified character appears
// the string.

const countChar = (word, char) => {
  word = word?.toLowerCase();
  char = char?.toLowerCase();

  return (totalCount = word?.split("")?.reduce((acc, curr) => {
    if (curr === char) {
      acc++;
    }
    return acc;
  }, 0));
};

console.log(countChar("Mississippi", "I")); // Output: 4

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should
// accept any character that is part of the ASCII character set and is printable).
