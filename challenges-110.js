// 1408. String Matching in an Array

// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.

// #Solution

var stringMatching = function (words) {
  let resultSet = new Set();
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(words[i])) {
        resultSet.add(words[i]);
        break; // Once we find a match, we don't need to check further for the same word
      }
    }
  }
  return Array.from(resultSet);
};

console.log(findSubstrings(["mass", "as", "hero", "superhero"])); // Output: ["as","hero"]
console.log(findSubstrings(["leetcode", "et", "code"])); // Output: ["et","code"]
console.log(findSubstrings(["blue", "green", "bu"])); // Output: []
console.log(findSubstrings(["leetcoder", "leetcode", "od", "hamlet", "am"])); // Output: ["leetcode","od","am"]
