// // 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// #solution

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    // Sort the string to form the key
    const sortedStr = str.split("").sort().join("");

    // If the key is not present in the map, add it with an empty array
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    // Push the original string to the group
    map.get(sortedStr).push(str);
  }

  // Convert the map values to an array of arrays
  return Array.from(map.values());
}

// Example 1
let strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1)); // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2
let strs2 = [""];
console.log(groupAnagrams(strs2)); // Output: [[""]]

// Example 3
let strs3 = ["a"];
console.log(groupAnagrams(strs3)); // Output: [["a"]]
