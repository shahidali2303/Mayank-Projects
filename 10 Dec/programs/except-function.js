const numbers = [1, 2, 3, 4];
const output = except(numbers, [1, 2]);

function except(array, excluded) {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
}

console.log(!false);
