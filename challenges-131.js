// Create a function makeCounter that returns
// a counter object with methods to increment,
// decrement, and reset the counter. The
// counter should maintain its current value and
// provide these operations:
// 1. increment() – Increases the counter
// by 1 and returns the new value.
// 2. decrement() – Decreases the counter
// by 1 and returns the new value.
// 3. reset() – Resets the counter to its
// initial value (default: 0) and returns the
// reset value.
// The counter should also allow an optional
// initial value.
// Example Inputs & Outputs
// const counter = makeCounter(5);
// console.log(counter.increment()); //
// console.log(counter.increment()); //
// console.log(counter.decrement()); //
// console.log(counter.reset()); //
// console.log(counter.decrement()); //

//Answers
function makeCounter(initialValue = 0) {
  // Your implementation

  let count = initialValue;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = initialValue;
      return count;
    },
    getValue() {
      return count;
    },
  };
}

let counter = makeCounter(5);
counter.increment();
counter.decrement();
