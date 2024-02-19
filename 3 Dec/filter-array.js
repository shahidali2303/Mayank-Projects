const numbers = [1, 2, -1, 3];

const filtered = numbers.filter(function (number) {
  return number >= 0;
});
console.log(filtered);

console.log(typeof numbers);
