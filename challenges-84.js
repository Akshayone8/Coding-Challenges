//  #CodeWars

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//Solution

function findShort(s) {
  let newArr = s.split(" ");
  let finalResult = [];
  for (let i = 0; i < newArr.length; i++) {
    finalResult.push(newArr[i].length);
  }
  return Math.min(...finalResult);
}

findShort("bitcoin take over the world maybe who knows perhaps"); //3
findShort("Let's travel abroad shall we");

// Method-2

function findShort(str) {
  return Math.min(...str.split(" ").map((item) => item.length));
}
findShort("Let's travel abroad shall we");
