// #Question - Remove the given numbner from the array

// #Solution

function test(arr, num) {
  let res = arr.filter((item) => item !== num);
  return res;
}

test([1, 2, 3, 4, 5], 2);
