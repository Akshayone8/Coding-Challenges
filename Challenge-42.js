// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

//solutions

function countConsistentStrings(allowed, words) {
  const allowedSet = new Set(allowed);
  let consistentCount = 0;
  for (const word of words) {
    let isConsistent = true;
    for (const char of word) {
      if (!allowedSet.has(char)) {
        isConsistent = false;
        break;
      }
    }
    if (isConsistent) {
      consistentCount++;
    }
  }
  return consistentCount;
}

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])); // Output: 2
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
); // Output: 7
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
); // Output: 4
