// #Question 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// #Solution

var firstUniqChar = function (str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      newArr.push(str.indexOf(str[i]));
    }
  }

  return newArr.length === 0 ? -1 : newArr[0];
};
