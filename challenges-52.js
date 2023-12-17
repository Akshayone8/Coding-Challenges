const item1 = { a: 1, b: 2, c: 3, d: 10, e: 13 };
const item2 = { a: 1, b: 3, c: 10, e: 13 };

let name = {};
for (let key in item1) {
  if (item1[key] === item2[key]) {
    name[key] = item1[key];
  }
}
console.log(name);

//{a:1,e:13}
