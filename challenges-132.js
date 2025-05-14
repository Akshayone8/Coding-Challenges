// Write a function reverseWords that takes a
// sentence string as input and returns a new string
// where each word is reversed, but the order of
// the words remains the same.
// Words are separated by spaces. Preserve the
// original spacing.
// Example Inputs & Outputs
// reverseWords("Hello World") /
// reverseWords("JavaScript is fun") /
// reverseWords(" Lead and Trail ") /
// reverseWords("") /
// reverseWords("OneWord")

//Solution

function reverseWords(str) {
  // Your implementation
  return str
    .split(/(\s+)/) //here we are tyring to capture the white space with brackets
    .map((part) => (part.trim() ? part.split("").reverse().join("") : part))
    .join("");
}

//For the purpose of user debugging.
reverseWords("Hello World");
