//*-
//* Programming Question: Hash Tag Generator
//*.

//? You are required to implement a function generateHash that generates a hash tag from a given input string.

// The hash tag should be constructed as follows:
//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated
// together without spaces.

//? If the length of the input string is greater than 280 characters or if the input string is empty or
// contains only whitespace, the function should return false.

//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.

const generateHash = (str) => {
  if (str?.lenght > 280 || str?.trim() === 0) {
    false;
  }
  let text = str?.split(" ");
  text = text?.map((e) => {
    //1St way
        return e?.replace(e[0], e[0]?.toUpperCase());

    // 2nd way
    // return e?.charAt(0)?.toUpperCase() + e?.slice(1);
  });
  text = `#${text?.join("")}`;
  return text;
};
console.log(generateHash("my name is samee uzzama"));
// o/p "#MyNameIsSameeUzzama"
