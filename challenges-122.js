// Given a positive integer num, determine the number of set bits (1s) present in the binary representation of the given number, commonly referred to as the Hamming weight.

// Input
// num: number: A positive integer
// Examples
// Input: num = 8
// Output: 1
// Explanation: The given number in binary (1000) has a total of one set bit
// Input: num = 9
// Output: 2
// Explanation: The given number in binary (1001) has a total of two set bit

function test(nums) {
  let num = nums.toString(2);
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "1") {
      count += 1;
    }
  }
  console.log(count);
}
test(123);
