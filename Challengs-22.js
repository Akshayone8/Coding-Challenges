// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// #solution

function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a, b) => a.length - b.length);
}

sortByLength(["Beg", "Life", "I", "To"]);

// ---------------------------- or ------------------------------

function test(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].length > arr[j + 1].length) {
        let result = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = result;
      }
    }
  }
  return arr;
}
test(["Telescopes", "Glasses", "Eyes", "Monocles"]);
