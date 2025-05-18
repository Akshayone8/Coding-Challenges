// Anagram Checker

function isAnagram(str1, str2) {
  // Your implementation
  const format = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");
  return format(str1) === format(str2);
}

//For the purpose of user debugging.
isAnagram("dormitory!!", "dirty room");
