// Given an array of integers numbers, write a function that returns the indices of two integers within the numbers array that sum up to a target integer. The smaller index should appear first.

// Input
// numbers: number[]: An array of integers
// target: number: An integer
// Notes
// There will always be exactly one solution for the given input
// The same element should not be used more than once
// Examples
// Input: numbers = [0,7,1,9], target = 7
// Output: [0,1]
// Explanation: numbers[0] plus numbers[1] = 7 which is target
// Input: numbers = [4,9,2,1,7], target = 5
// Output: [0,3]
// Explanation: numbers[3] plus numbers[0] = 5 which is target
// Input: numbers = [4,4], target = 8
// Output: [0,1]
// Explanation:

//solution

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // Start j from i+1 to avoid duplicate checks
      if (numbers[i] + numbers[j] === target) {
        return [i, j]; // Return immediately when a pair is found
      }
    }
  }
  return []; // This line is never reached because a solution is always guaranteed
}

console.log(twoSum([0, 7, 1, 9], 7)); // Output: [0,1]
console.log(twoSum([4, 9, 2, 1, 7], 5)); // Output: [0,3]
console.log(twoSum([4, 4], 8)); // Output: [0,1]
