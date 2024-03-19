// #Question
// You are given a number N. You need to print the pattern for the given value of N.

// For N = 2 the pattern will be
// 2 2 1 1
// 2 1

// For N = 3 the pattern will be
// 3 3 3 2 2 2 1 1 1
// 3 3 2 2 1 1
// 3 2 1

//first I try making outer loop i.e for loop n=2

function printStarPattern(rows) {
  for (let i = rows; i >= 1; i--) {
    let pattern = "";
    for (let j = rows * i - 1; j >= 0; j--) {
      pattern += Math.floor(j / i) + 1;
    }
    console.log(pattern);
  }
}

printStarPattern(3);
