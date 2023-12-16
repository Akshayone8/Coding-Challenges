// - Find the sum of n numbers sum(1)(2)(3)(4)..( n)()

let sum = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)(7)());

// or

function sums(a) {
  return function (b) {
    return b ? sums(a + b) : a;
  };
}

console.log(sums(1)(2)(3)(7)());
