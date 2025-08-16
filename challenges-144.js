var missingNumber = function (nums) {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum += nums[i];
  }
  return total - partialSum;
};

missingNumber([3, 0, 1]); // Output: 2
