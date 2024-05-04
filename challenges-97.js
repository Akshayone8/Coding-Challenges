// Write a program to find 2 to the power of 10 without using default method

function calculatePower(base, power) {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= base;
  }
  return result;
}

calculatePower(2, 10);

//-------------- or using recursive ------------------

function pow(n, x) {
  if (x === 0) return 1;
  else {
    return n * pow(n, x - 1);
  }
}
console.log(pow(2, 3));

// Let's see how it works with the call pow(2, 3):

// Since x is not 0, it goes into the else block.
// It returns 2 * pow(2, 2).
// pow(2, 2) returns 2 * pow(2, 1).
// pow(2, 1) returns 2 * pow(2, 0).
// pow(2, 0) returns 1.
// So, pow(2, 1) returns 2 * 1 = 2.
// pow(2, 2) returns 2 * 2 = 4.
// pow(2, 3) returns 2 * 4 = 8.
// Finally, console.log outputs 8.
