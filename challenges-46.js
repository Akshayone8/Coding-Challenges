// #Question

// - Convert input thisIsATest (camel case) to This_Is_A_Test (snake case)

// #solution

function snake(str) {
  let result = "";
  str.split("").map((item, index) => {
    if (item === item.toUpperCase()) {
      result += "_" + item;
    } else {
      result += item;
    }
  });
  let one = result[0].toUpperCase();
  return one + result.slice(1);
}

console.log(snake("thisIsATest"));
