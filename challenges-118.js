const arr = [
  { id: 1, marks: 29 },
  { id: 2, marks: 26 },
  { id: 3, marks: 29 },
  { id: 4, marks: 29 },
  { id: 5, marks: 40 },
  { id: 6, marks: 40 },
];

const grouped = arr.reduce((acc, curr) => {
  if (!acc[curr.marks]) {
    acc[curr.marks] = { id: [], marks: curr.marks };
  }
  acc[curr.marks].id.push(curr.id);
  return acc;
}, {});

const output = Object.values(grouped);
console.log(output);

//[ {id: Array(1), marks: 26}

// {id: Array(3), marks: 29}

// {id: Array(2), marks: 40} ]
