// #Question - 2085. Count Common Words With One Occurrence

// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

// Example 1:

// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:

// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0
// Explanation: There are no strings that appear in each of the two arrays.
// Example 3:

// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".

// #Solution

var countWords = function (arr1, arr2) {
  arr1 = arr1.filter((item) => {
    return arr1.indexOf(item) === arr1.lastIndexOf(item);
  });
  arr2 = arr2.filter((item) => {
    return arr2.indexOf(item) === arr2.lastIndexOf(item);
  });
  let res = [];
  arr1.map((item) => {
    if (arr2.includes(item)) {
      res.push(item);
    }
  });
  return res.length;
};

countWords(
  ["leetcode", "is", "amazing", "as", "is"],
  ["amazing", "leetcode", "is"]
);
