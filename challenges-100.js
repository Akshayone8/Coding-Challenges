// fimd the missing  number from an array

function findMissingNumber(arr) {
  let totalNumbers = arr.length + 1;
  let expectedSum = (totalNumbers * (totalNumbers + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  let missingNumber = expectedSum - actualSum;
  console.log(missingNumber);
}

findMissingNumber([2, 3, 4, 5, 6, 7]);
