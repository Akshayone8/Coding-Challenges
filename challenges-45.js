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
