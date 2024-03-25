// #Question - 20. Valid ParenthesesGiven

// a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// #Solution

var isValid = function (s) {
  let stack = [];
  let bracketsMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const topOfStack = stack.pop();
      if (bracketsMap[char] !== topOfStack) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

isValid("(]"); //false
