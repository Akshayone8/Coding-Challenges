solution  function fakeBin(x) {   let Arr = [];   let newArr = x     .split("")     .map((item) => (item <= 4 ? Arr.push(0) : Arr.push(1)));   return Arr.join(""); }  fakeBin("45385593107843568");
