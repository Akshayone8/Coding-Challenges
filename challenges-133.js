// Write a function that takes a sentence
// as input and returns a new sentence
// where the first letter of each word is
// capitalized, and the rest of the letters
// are in lowercase.
// Input: A string sentence containing
// one or more words separated by
// spaces.
// Output: A new string where each
// word starts with an uppercase letter
// followed by lowercase letters.
// Example Inputs & Outputs
// // Example 1:
// Input: "hello world"
// Output: "Hello World"
// // Example 2:
// Input: "javaScript is FUN"
// Output: "Javascript Is Fun"
// // Example 3:
// Input: " multiple spaces
// Output: "Multiple Spaces"
// // Example 4:
// Input: ""
// Output: ""

//Solution

function capitalizeWords(str) {
  // Your implementation
  return str
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

//For the purpose of user debugging.
capitalizeWords("hello world");
