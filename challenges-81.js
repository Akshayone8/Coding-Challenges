// #Question - Find the Missing Number:
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing.

function findNumber(arr) {
  let startingNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== startingNum) {
      return startingNum;
    }
    startingNum++;
  }
}

var arr = [5, 7, 8, 9, 10];
console.log(findNumber(arr));
