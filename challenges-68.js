// #Question - Program to print the dupliate values of the array

// #Solution

function test(arr) {
  let newArr = [];
  for (let i of arr) {
    if (arr.indexOf(i) !== arr.lastIndexOf(i)) {
      if (!newArr.includes(i)) {
        newArr.push(i);
      }
    }
  }
  return newArr;
}

test([1, 2, 4, 4, 7, 8, 7, 7, 3, 6]);
