// #Question - Flatten the given nested array

// #Solution

const arr = [1, 2, [3, 4], [5, 6, 7]];
const r = arr.reduce((acc, val) => acc.concat(val), []);
console.log(r);
