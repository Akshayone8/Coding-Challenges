// #Question

//- Program to print numbers in following pattern - 1,12,123,1234

function printNumber(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
  }
  result += ",";
  return result;
}

printNumber(4);
