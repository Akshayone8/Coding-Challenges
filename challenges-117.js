function test(str, str1) {
  let newStr = [];
  str1 = String(str1);
  let total = str.length + str1.length;
  for (let i = 0; i < total; i++) {
    newStr.push((str[i] || "") + (str1[i] || ""));
  }
  console.log(newStr.join(""));
}
test("abcdef", 123); //a1b2c3def
