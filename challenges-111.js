//interview question tell me count of characters

// #solution

const str = "hare krishna hare krishna krishna krishna hare hare";

let newObj = {};

for (let x of str) {
  newObj[x] ? (newObj[x] += 1) : (newObj[x] = 1);
}

console.log(newObj);
