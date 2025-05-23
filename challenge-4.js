//  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//  #Examples:

//  Kata.getMiddle("test") should return "es"

//  Kata.getMiddle("testing") should return "t"

//  Kata.getMiddle("middle") should return "dd"

//  Kata.getMiddle("A") should return "A"

//  #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// #Solution
// method-1

function getMiddle(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
}

console.log(getMiddle("test")); // "es"
console.log(getMiddle("tests")); // "s"

function getMiddle(s) {
  let findMiddleChar = Math.floor(s.length / 2);
  return s.length % 2 === 0
    ? s.slice(findMiddleChar - 1, findMiddleChar + 1)
    : s.charAt(findMiddleChar);
}

//2nd method
function getMiddle(s) {
  //Code goes here!
  let strIdx;
  let endIdx;

  if (s.length % 2 === 0) {
    strIdx = Math.floor(s.length / 2) - 1;
    endIdx = strIdx + 2;
  } else {
    strIdx = Math.floor(s.length / 2);
    endIdx = strIdx + 1;
  }
  return s.substring(strIdx, endIdx);
}

getMiddle("test"); //even
getMiddle("tests"); //odd
