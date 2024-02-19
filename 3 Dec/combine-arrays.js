const first = [1, 2, 3];
const Second = [4, 5, 6];

const combine = first.concat(Second);
console.log(combine);

// spread operator
const combined = [...first, ...Second];
console.log(combined);
