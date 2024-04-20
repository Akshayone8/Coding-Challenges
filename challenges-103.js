//Question
// Consider a string, S, that is a series of characters, each followed by its frequency as an integer. The string is not compressed correctly, so there may be multiple occurrences of the same character. A properly compressed string will consist of one instance of each character in alphabetical order followed by the total count of that character within the string.
// solve this problem in js

function compressString(S) {
  // Step 1: Parse the input string
  const frequencyMap = {};
  console.log(frequencyMap);
  for (let i = 0; i < S.length; i += 2) {
    const char = S[i];
    const frequency = parseInt(S[i + 1]);
    if (frequencyMap[char]) {
      frequencyMap[char] += frequency;
    } else {
      frequencyMap[char] = frequency;
    }
  }

  // Step 2: Sort characters in alphabetical order
  const sortedChars = Object.keys(frequencyMap).sort();

  // Step 3: Construct the compressed string
  let compressedString = "";
  for (const char of sortedChars) {
    compressedString += char + frequencyMap[char];
  }

  // Step 4: Return the compressed string
  return compressedString;
}

// Example usage:
const S = "a3b2c4a1";
const compressed = compressString(S);
console.log(compressed); // Output: "a4b2c4"
