// 2506. Count Pairs Of Similar Strings

// You are given a 0-indexed string array words.

// Two strings are similar if they consist of the same characters.

// For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
// However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
// Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

// Example 1:

// Input: words = ["aba","aabb","abcd","bac","aabc"]
// Output: 2
// Explanation: There are 2 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'.
// - i = 3 and j = 4 : both words[3] and words[4] only consist of characters 'a', 'b', and 'c'.
// Example 2:

// Input: words = ["aabb","ab","ba"]
// Output: 3
// Explanation: There are 3 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'.
// - i = 0 and j = 2 : both words[0] and words[2] only consist of characters 'a' and 'b'.
// - i = 1 and j = 2 : both words[1] and words[2] only consist of characters 'a' and 'b'.
// Example 3:

// Input: words = ["nba","cba","dba"]
// Output: 0
// Explanation: Since there does not exist any pair that satisfies the conditions, we return 0.

// #Solution --------------------

function countSimilarPairs(words) {
  // Function to normalize a word by converting it to a sorted set of unique characters
  function normalize(word) {
    return Array.from(new Set(word)).sort().join("");
  }

  let count = 0;
  let normalizedWords = words.map(normalize);

  // Nested loop to compare each pair of words
  for (let i = 0; i < normalizedWords.length; i++) {
    for (let j = i + 1; j < normalizedWords.length; j++) {
      if (normalizedWords[i] === normalizedWords[j]) {
        count++;
      }
    }
  }

  return count;
}

// Test cases
console.log(countSimilarPairs(["aba", "aabb", "abcd", "bac", "aabc"])); // Output: 2
console.log(countSimilarPairs(["aabb", "ab", "ba"])); // Output: 3
console.log(countSimilarPairs(["nba", "cba", "dba"])); // Output: 0
