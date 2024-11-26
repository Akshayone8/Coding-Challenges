// Implement a function zip, that takes 2 arrays and returns a new array with elements of both arrays interleaved.
// Example 1
// Input: [1, 2], [3, 4]
// Output: [1, 3, 2, 4]
// Example 2
// Input: [1, 2], [4, 5, 6]
// Output: [1, 4, 2, 5, 6]
// Example 3
// Input: [1, 2, 3, 4], [5, 6]
// Output: [1, 5, 2, 6, 3, 4]

function zip(arr1, arr2) {
  let result = [];
  let findMaxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < findMaxLength; i++) {
    if (i < arr1.length) {
      result.push(arr1[i]);
    }
    if (i < arr2.length) {
      result.push(arr2[i]);
    }
  }
  return result;
}

// Example usage:
console.log(zip([1, 2], [3, 4])); // Output: [1, 3, 2, 4]
console.log(zip([1, 2], [4, 5, 6])); // Output: [1, 4, 2, 5, 6]
console.log(zip([1, 2, 3, 4], [5, 6])); // Output: [1, 5, 2, 6, 3, 4]
