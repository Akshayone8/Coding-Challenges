function chunk(arr, size) {
  let newArr = [];
  let miniAns = [];
  for (let i = 0; i < arr.length; i++) {
    miniAns.push(arr[i]);
    if (miniAns.length === size || i === arr.length - 1) {
      newArr.push([...miniAns]);
      miniAns.length = 0;
    }
  }
  return newArr;
}

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5], 3));
