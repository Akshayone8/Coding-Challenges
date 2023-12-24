// #Question 2185. Counting Words With a Given Prefix

// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

// Example 1:

// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// Example 2:

// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.

// #Solution

var prefixCount = function (words, pref) {
  let count = 0;
  let a = words.map((item) => {
    if (item.startsWith(pref)) {
      count++;
    }
  });
  return count;
};

prefixCount(["pay", "attention", "practice", "attend"], "at");

//or

var prefixCount = function (words, pref) {
  const matchingWords = words.filter((word) => word.startsWith(pref));

  return matchingWords.length;
};

prefixCount(["pay", "attention", "practice", "attend"], "at");
