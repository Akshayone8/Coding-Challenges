// // Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.

// // Arguments
// // array (Array): Array of numbers.
// // Returns
// // (Number): Returns the mean of the values in array.

// mean([4, 2, 8, 6]); // => 5
// mean([1, 2, 3, 4]); // => 2.5
// mean([1, 2, 2]); // => 1.6666666666666667

export default function mean(array) {
  let total = array.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  return total / array.length;
}
