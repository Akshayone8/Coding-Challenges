// #Question
// need to find max and min value from array without using default mthod in js

// #Solution

let numbers = [-15, -26, 15, 1, 23, -64, 23, 76];

// Initialize max and min with the first element of the array
let max = numbers[0];
let min = numbers[0];

// Iterate through the array starting from the second element
for (let i = 1; i < numbers.length; i++) {
  // Update max if the current element is greater
  if (numbers[i] > max) {
    max = numbers[i];
  }

  // Update min if the current element is smaller
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

// Print the result
console.log("Maximum value:", max);
console.log("Minimum value:", min);
