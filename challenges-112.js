// // 1023. Camelcase Matching

// Given an array of strings queries and a string pattern, return a boolean array answer where answer[i] is true if queries[i] matches pattern, and false otherwise.

// A query word queries[i] matches pattern if you can insert lowercase English letters pattern so that it equals the query. You may insert each character at any position and you may not insert any characters.

// Example 1:

// Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
// Output: [true,false,true,true,false]
// Explanation: "FooBar" can be generated like this "F" + "oo" + "B" + "ar".
// "FootBall" can be generated like this "F" + "oot" + "B" + "all".
// "FrameBuffer" can be generated like this "F" + "rame" + "B" + "uffer".
// Example 2:

// Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"
// Output: [true,false,true,false,false]
// Explanation: "FooBar" can be generated like this "Fo" + "o" + "Ba" + "r".
// "FootBall" can be generated like this "Fo" + "ot" + "Ba" + "ll".
// Example 3:

// Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBaT"
// Output: [false,true,false,false,false]
// Explanation: "FooBarTest" can be generated like this "Fo" + "o" + "Ba" + "r" + "T" + "est".

// #Solution

function camelMatch(quesries, pattern) {
  const isMatch = (query, pattern) => {
    let i = 0;
    for (let char of query) {
      if (i < pattern.length && char === pattern[i]) {
        i++;
      } else if (char >= "A" && char <= "B") {
        return false;
      }
    }
    return i === pattern.length;
  };

  return quesries.map((query) => isMatch(query, pattern));
}

// Example usage:
const queries1 = [
  "FooBar",
  "FooBarTest",
  "FootBall",
  "FrameBuffer",
  "ForceFeedBack",
];
const pattern1 = "FB";
console.log(camelMatch(queries1, pattern1)); // [true, false, true, true, false]

const queries2 = [
  "FooBar",
  "FooBarTest",
  "FootBall",
  "FrameBuffer",
  "ForceFeedBack",
];
const pattern2 = "FoBa";
console.log(camelMatch(queries2, pattern2)); // [true, false, true, false, false]

const queries3 = [
  "FooBar",
  "FooBarTest",
  "FootBall",
  "FrameBuffer",
  "ForceFeedBack",
];
const pattern3 = "FoBaT";
console.log(camelMatch(queries3, pattern3)); // [false, true, false, false, false]
