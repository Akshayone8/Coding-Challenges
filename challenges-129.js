function countVoewls() {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let reg = /[aeiou]/gi;
    if (reg.test(str[i])) {
      count++;
    }
  }
  return count;
}
countVoewls("hello"); //2 [e,o]
countVoewls("javascript"); //3 [a,a,i]
