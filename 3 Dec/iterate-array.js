const numbers = [1, 2, 3];

// for of loop
for (let number of numbers) {
  console.log(number);
}

// foreach()
numbers.forEach(function (index, number) {
  console.log(number, index);
});
