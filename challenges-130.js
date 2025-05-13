// Wrie a function shufle that accepts an array and returns a new array with the elements in randomized order.

// example
// input :[1,2,3,4];
// possible output : [3,1,2,4]

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

shuffle([1, 2, 3, 4]);
