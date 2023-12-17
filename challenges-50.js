//Print the duplicate letters on a given string

// #Solution

function findDuplicateLetters(str) {
  let result = [];
  st = str.toLowerCase();
  for (let i = 0; i < st.length; i++) {
    if (
      st.indexOf(st[i]) !== st.lastIndexOf(st[i]) &&
      !result.includes(st[i])
    ) {
      result.push(st[i], i);
    }
  }
  return result;
}

const input = "Akshay Omkar";
console.log(findDuplicateLetters(input));
