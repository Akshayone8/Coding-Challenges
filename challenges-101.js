// Akshay, who is working at a software company forgot the password of his Linkedin Account. But he knows the ASCIl values of his password in reverse order.
// Help Aman to find the password.
// To decode the password, first reverse the string of digits, then successively pick valid values from the string and convert them to their ASCII equivalents. Some of the values will have two digits, and others three. Use the ranges of valid values when decoding the string of digits.

// Solution

function test(str) {
  let newArr = [];
  let res = str.split("").reverse().join("");
  console.log(res);
  for (let i = 0; i < res.length - 1; i += 2) {
    let x = res[i] + res[i + 1];
    console.log(typeof x);
    if (x === 32) {
      newArr.push(String.fromCharCode(x));
    } else if ((x >= 65 && x <= 91) || (x >= 96 && x <= 122)) {
      newArr.push(String.fromCharCode(x));
    } else {
      x = x + res[i + 2];
      newArr.push(String.fromCharCode(x));
      i++;
    }
  }
  return newArr.join("");
}
test("796115110113721110141108");
