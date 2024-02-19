const number = [74, 18, 10, 105, 5];
const sorted = number.sort(compare);
console.log(sorted);

function compare(a, b) {
  // 1. a-b < 0 negative
  // 2. a-b > 0 positive , a comes first
  // 3. a-b === 0 , nothing will happen

  return a - b;
}
