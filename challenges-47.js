// #Question Find second largest number in array

// #Solution
function findSecondLargest(arr) {
  let first = 0;
  let second = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
}

findSecondLargest([12, 35, 1, 10, 35, 1]);
