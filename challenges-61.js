// #Question
// Go Ahead and implement this code snippet
const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);

// #Solution

const calc = {
  total: 0,
  add(a) {
    (this.total += a), console.log("add ", this);
    return this;
  },
  multiply(a) {
    (this.total *= a), console.log("multiply ", this);
    return this;
  },
  subtract(a) {
    (this.total -= a), console.log("subtract ", this);
    return this;
  },
};
