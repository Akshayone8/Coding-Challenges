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

// Returning this: By returning this, you ensure that each method returns the calc object, allowing the next method in the chain to be called on the same object.
// Enabling Chaining: This is what makes it possible to chain multiple method calls in one line, resulting in cleaner and more readable code.
// So, the return this at the end of each method is essential for enabling method chaining in your calc object.
