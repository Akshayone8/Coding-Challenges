// call method pollyfill

let obj = {
  name: "jhon",
  age: 20,
};

function getDetails(city) {
  console.log(`Name: ${this.name}, Age: ${this.age} and i am from ${city}`);
}

Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myCall must be called on a function");
  }
  obj.fn = this;
  obj.fn(...args);
};

getDetails.myCall(obj, "New York"); // Name: jhon, Age: 20 and i am from New York

// apply method pollyfill

Function.prototype.myApply = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myApply must be called on a function");
  }
  if (!Array.isArray(...args)) {
    throw new Error("args must be an array");
  }
  obj.fn = this;
  obj.fn(...args);
};

getDetails.myApply(obj, ["New York"]);

// bind method pollyfill

Function.prototype.myBind = function (obj = {}, ...args1) {
  if (typeof this !== "function") {
    throw new Error("Error is called");
  }
  obj.fn = this;
  return function (...args2) {
    obj.fn(...args1, ...args2);
  };
};

let details = getDetails.myBind(obj);
details("London"); // Name: jhon, Age: 20 and i am from London
