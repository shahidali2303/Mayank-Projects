const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// end
const last = numbers.pop(); //
console.log(last);

// beginning
const first = numbers.shift();
console.log(first);
console.log(numbers);

// middle
console.log(numbers.splice(2, 2));
