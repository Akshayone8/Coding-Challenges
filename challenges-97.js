// Write a program to find 2 to the power of 10 without using default method

function calculatePower(base, power) {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= base;
  }
  return result;
}

calculatePower(2, 10);
