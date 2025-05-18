// fimd the missing  number from an array

function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

findMissingNumber([2, 3, 4, 5, 6, 7]);
