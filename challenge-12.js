Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.


#solution


function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.forEach(item=>{if(arr2.indexOf(item)===-1){
    newArr.push(item)
  }});
  arr2.forEach(item=>{if(arr1.indexOf(item)===-1){
    newArr.push(item)
  }});
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
