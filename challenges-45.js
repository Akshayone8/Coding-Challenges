// #Question
// Write a function whch returns a function that generates fibonacci numbers.
// Don't use generators.

// #solution

function createFibonacciGenerator() {
  let prev = 0;
  let current = 1;
  return function () {
    const result = prev;
    [prev, current] = [current, prev + current];
    return result;
  };
}

let fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator()); // should print 0
console.log(fibonacciGenerator()); // should print 1
console.log(fibonacciGenerator()); // should print 1
console.log(fibonacciGenerator()); // should print 2
console.log(fibonacciGenerator()); // should print 3
console.log(fibonacciGenerator()); // should print 5
console.log(fibonacciGenerator()); // should print 8

// Fibonacci numbers are a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on. The sequence continues indefinitely, with each number being the sum of the two preceding ones.
