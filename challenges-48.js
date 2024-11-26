//this problem we will call it as infinite curring
// - Find the sum of n numbers sum(1)(2)(3)(4)..( n)()

let sum = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)(7)());

// or

function sums(a) {
  return function (b) {
    return b ? sums(a + b) : a;
  };
}

console.log(sums(1)(2)(3)(7)());

//explanationz
// 1 -> will go inside a parameter -> returns a funtions b -> there we are checking weather function b has any parameter if there then we are adding it and calling sums function 1+2 -> sums(3) -> it again returns function b i.e argument 3 , b is not empty -> it will call sums function again here sums(6) -> again it returns function b there we have 7 -> sums(13)
//
