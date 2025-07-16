//  9. Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

//solution

var isPalindrome = function (x) {
  if (x < 0) return false; // because if number is less than 0 it is not palindrome
  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10; // to find last number
    rev = 10 * rev + rem;
    x = Math.floor(x / 10); //to remove last number
  }
  return rev === xCopy;
};
