// #Quesion

// Write a function which loops through an array and checks if n of the elements
// of the array satisfy the condition function that is passed
// Signature of the 'some' function

// (array, n, conditionFunction) -> trueOrFalse
// array - Input array
// n - The function should check if n elements of the conditionFunction satisfy
// Signature of the 'isEven' and 'isPrime' functions. They should take one integer as input and return a true or false value.

// (int) -> trueOrFalse

// Write the some function and isEven and isPrime functions

// #Solution

function isEven(num) {
  return num % 2 === 0;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  //this loop will check weather the number is prime or no ex if you want to check 11 is prime or not it will start from 2 till i=10 then condition denies and it comes out of the for loop and return true

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function some(array, n, conditionFunction) {
  let count = 0;
  for (const element of array) {
    //if condition is true count will increase and compare it with "n" if it is equal then return true
    if (conditionFunction(element)) {
      count++;
      if (count === n) {
        return true;
      }
    }
  }
  return false;
}

console.log(some([2, 4, 6], 3, isEven)); // should print true
console.log(some([2, 3, 4], 3, isEven)); // should print false
console.log(some([2, 3, 11], 4, isPrime)); // should print false
console.log(some([2, 3, 5, 9], 3, isPrime)); // should print true
