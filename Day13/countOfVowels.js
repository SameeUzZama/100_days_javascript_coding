// 13: Write a function that takes a string as input and returns the count of
// vowels in that string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both
// lowercase and uppercase).

const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let arr = str?.toLowerCase()?.split("");
  let count = 0;
  for (let char of arr) {
    if (vowels?.includes(char)) {
      count++;
    }
  }
  return count;
};

// Example usage:
console.log(countVowels("Helloo world")); // Output: 4
console.log(countVowels("The quick brown fox")); // Output: 5
console.log(countVowels("Brrrp")); // Output: 0

// Constraints:
// The input string may contain letters in both uppercase and lowercase.
// The output should be a non-negative integer representing the count of
// vowels in the input string.
