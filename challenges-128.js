function kMostFrequent(numbers, k) {
  // Create an object to store frequency counts
  const freqCount = {};

  // Count occurrences of each number
  for (const num of numbers) {
    freqCount[num] = (freqCount[num] || 0) + 1;
  }

  // Convert the object to array of [number, count] pairs and sort by count
  console.log(Object.entries(freqCount).sort((a, b) => a[1] - b[1]));
  return Object.entries(freqCount)
    .sort((a, b) => b[1] - a[1]) // Sort by count in descending order
    .slice(0, k) // Take only k elements
    .map((pair) => parseInt(pair[0])); // Extract just the numbers
}

// Test cases
console.log(kMostFrequent([4, 4, 4, 6, 6, 5, 5, 5], 2)); // [4, 5] or [5, 4]
console.log(kMostFrequent([7, 7, 7, 8, 8, 9, 9, 9], 3)); // [7, 9, 8] (any order)
console.log(kMostFrequent([10, 10, 10, 10, 10], 1)); // [10]
