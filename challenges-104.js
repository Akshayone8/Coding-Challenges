// #Question 1221. Split a String in Balanced Strings

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

// #Solution

function balancedStringSplit(s) {
  let balancedCount = 0;
  let countL = 0;
  let countR = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      countL++;
    } else {
      countR++;
    }

    if (countL === countR) {
      balancedCount++;
      countL = 0;
      countR = 0;
    }
  }

  return balancedCount;
}
console.log(balancedStringSplit("RLRRRLLRLL"));

// ------------------or -------------------------

function balancedStringSplit(s) {
  let balance = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      balance++;
    } else {
      balance--;
    }

    if (balance === 0) {
      count++;
    }
  }
  return count;
}

balancedStringSplit("RLRRRLLRLL");
