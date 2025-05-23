// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z  d  cs"

// Example---
// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

//improved version

function mappingFun(num) {
  return num.split("").reduce((acc, cur) => (acc += cur.charCodeAt() - 96), 0);
}

function test(str) {
  let newStr = str
    .split(/[aeiou]/g)
    .filter((item) => item !== "")
    .map(mappingFun);
  return Math.max(...newStr);
}

console.log(test("strength"));

//1st method

function solve(s) {
  return Math.max(
    ...s
      .replace(/[aeiou]+/g, " ")
      .trim()
      .split(" ")
      .map(addUpSubstring)
  );
}

function charToValue(c) {
  return c.charCodeAt(0) - 96;
}

function addUpSubstring(str) {
  return str
    .split("")
    .map(charToValue)
    .reduce((acc, item) => (acc += item), 0);
}

//2nd method

function solve(str) {
  return Math.max(
    ...str
      .replace(/[aeiou]+/g, " ")
      .trim()
      .split(" ")
      .map((item) =>
        item
          .split("")
          .map((item) => item.charCodeAt(0) - 96)
          .reduce((ac, cu) => (ac += cu), 0)
      )
  );
}
solve("zodiacs");
