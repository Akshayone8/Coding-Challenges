// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


// #Solution

function removeEveryOther(arr){
  //your code here
  return arr.filter((_,idx)=>idx%2===0)
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);