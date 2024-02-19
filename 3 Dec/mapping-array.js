const numbers = [1, 2, -1, 3];

const filtered = numbers.filter(function (number) {
  return number >= 0;
});
console.log(filtered);

const items = filtered.map(function (n) {
  return `<li>${n}</li>`;
});
console.log(items);
