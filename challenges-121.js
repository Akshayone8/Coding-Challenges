class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    return this.items.length;
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  length() {
    return this.items.length;
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); // true

stack.push(10); // [10]
stack.push(20); // [10, 20]
stack.push(30); // [10, 20, 30]

console.log(stack.length()); // 3
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30 -> [10, 20]
console.log(stack.length()); // 2
console.log(stack.isEmpty()); // false
