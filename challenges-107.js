// // 648. Replace Words

// In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word derivative. For example, when the root "help" is followed by the word "ful", we can form a derivative "helpful".

// Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.

// Return the sentence after the replacement.

// Example 1:

// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"
// Example 2:

// Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
// // Output: "a a b c"

// #Solution
var replaceWords = function (dictionary, sentence) {
  const rootSet = new Set(dictionary);
  const words = sentence.split(" ");

  function findRoot(word) {
    for (let i = 1; i <= word.length; i++) {
      if (rootSet.has(word.substring(0, i))) {
        return word.substring(0, i);
      }
    }
    return word;
  }

  for (let i = 0; i < words.length; i++) {
    words[i] = findRoot(words[i]);
  }

  return words.join(" ");
};

// Example usage:
const dictionary1 = ["cat", "bat", "rat"];
const sentence1 = "the cattle was rattled by the battery";
console.log(replaceWords(dictionary1, sentence1)); // Output: "the cat was rat by the bat"

const dictionary2 = ["a", "b", "c"];
const sentence2 = "aadsfasf absbs bbab cadsfafs";
console.log(replaceWords(dictionary2, sentence2)); // Output: "a a b c"
