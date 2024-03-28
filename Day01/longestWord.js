//*
//* Programming Question: Longest Word in a String
//*
//? Q: Write a function find Longest Word that takes a string as input and returns the longest word in the string. If there are
// multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

const findLongestWord = (str) => {
  if (str?.trim()?.length === 0) {
    return false;
  }

  let words = str?.split(" ");
  // 1st way
  //   words = words.sort(
  //     (a, b) =>
  //       b.replace(/[^\w\s]/g, "")?.length - a.replace(/[^\w\s]/g, "")?.length
  //   );
  //   return words[0];

  // 2rd way
  //   return (words = words?.reduce(
  //     (acc, curr) =>
  //       acc.replace(/[^\w\s]/g, "")?.length > curr.replace(/[^\w\s]/g, "")?.length
  //         ? acc
  //         : curr,
  //     ""
  //   ));

  // 3rd way
    let longestWord = "";
    let longestLength = 0;
    for (const word of words) {
      const cleanedWord = word.replace(/[^\w\s]/g, "");
      if (cleanedWord.length > longestLength) {
        longestWord = cleanedWord;
        longestLength = cleanedWord.length;
      }
    }
    return longestWord;
};

console.log(
  findLongestWord("Watch sameeuzzama Javascript hundred days practice")
);
