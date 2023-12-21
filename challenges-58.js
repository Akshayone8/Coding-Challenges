// #Question
// - Program for Removing duplicates from array

function testing(arr) {
  let newArr = [];
  for (let item of arr) {
    if (newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  }
  return newArr;
}

testing([1, 1, 2, 3, 4, 4, 5, 6, 6, 6, 6]);
