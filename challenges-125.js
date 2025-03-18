// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// #Solution
function evenLast(numbers) {
  // Good luck
  if (numbers.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      total += numbers[i];
    }
  }
  return total * numbers[numbers.length - 1];
}

evenLast([2, 3, 4, 5]); //30
