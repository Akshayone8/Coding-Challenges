// 944. Delete Columns to Make Sorted

// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid.

// For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

// Example 1:

// Input: strs = ["cba","daf","ghi"]
// Output: 1
// Explanation: The grid looks as follows:
//   cba
//   daf
//   ghi
// Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.
// Example 2:

// Input: strs = ["a","b"]
// Output: 0
// Explanation: The grid looks as follows:
//   a
//   b
// Column 0 is the only column and is sorted, so you will not delete any columns.
// Example 3:

// Input: strs = ["zyx","wvu","tsr"]
// Output: 3
// Explanation: The grid looks as follows:
//   zyx
//   wvu
//   tsr
// All 3 columns are not sorted, so you will delete all 3.

// Constraints:

// n == strs.length
// 1 <= n <= 100
// 1 <= strs[i].length <= 1000
// strs[i] consists of lowercase English letters.

//#solution-1

var minDeletionSize = function (strs) {
  const n = strs.length;
  const m = strs[0].length;

  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0, prevChar = ""; j < n; j++) {
      const char = strs[j].charCodeAt(i);

      if (prevChar > char) {
        result++;
        break;
      }

      prevChar = char;
    }
  }

  return result;
};

console.log(minDeletionSize(["cba", "daf", "ghi"])); // Output: 1

// # Solution-2

function minDeletionSize(strs) {
  let numColsToDelete = 0; // Initialize the counter for columns to be deleted
  const numRows = strs.length; // Number of rows
  const numCols = strs[0].length; // Number of columns

  // Loop through each column
  for (let col = 0; col < numCols; col++) {
    // Loop through each row starting from the second row
    for (let row = 1; row < numRows; row++) {
      // Compare the current character with the character in the previous row
      if (strs[row][col] < strs[row - 1][col]) {
        // If the current character is less than the previous character, the column is not sorted
        numColsToDelete++; // Increment the counter
        break; // Break the inner loop and move to the next column
      }
    }
  }

  return numColsToDelete; // Return the number of columns to be deleted
}

// Example 1
console.log(minDeletionSize(["cba", "daf", "ghi"])); // Output: 1

// Example 2
console.log(minDeletionSize(["a", "b"])); // Output: 0

// Example 3
console.log(minDeletionSize(["zyx", "wvu", "tsr"])); // Output: 3
