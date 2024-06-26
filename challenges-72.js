// #Question 599. Minimum Index Sum of Two Lists
// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
// Example 3:

// Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".

// #Solution

function names(l1, l2) {
  let newArr = [];
  let minIndexSum = Infinity;
  debugger;
  for (let i = 0; i < l1.length; i++) {
    if (l2.includes(l1[i])) {
      let word = l1[i];
      let total = l1.indexOf(word) + l2.indexOf(word);
      if (total < minIndexSum) {
        minIndexSum = total;
        newArr = [word];
      } else if (total === minIndexSum) {
        newArr.push(word);
      }
    }
  }

  return newArr;
}

const result = names(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["KFC", "Shogun", "Burger King"]
);
console.log(result);

// another method

function test(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.includes(arr1[i]) && arr2.includes(arr1[i])) {
      newArr.push(arr1.indexOf(arr1[i]) + arr2.indexOf(arr1[i]));
    }
  }
  return Math.min(...newArr);
}
test(["happy", "sad", "good"], ["sad", "happy", "good"]);
