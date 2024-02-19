let numbers = [1, 2, 3, 4];

// solution 1
numbers.length = 0;

// solution 2
numbers.splice(0, numbers.length);

console.log(numbers);
