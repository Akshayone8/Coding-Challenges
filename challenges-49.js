// - Find the first non-repeated character from String 'HHello'

// #Solution

function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

firstNonRepeatedChar("hhello");
