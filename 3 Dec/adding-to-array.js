const numbers = [3, 4];

// end
// push() -> add values at tje end of the array
numbers.push(5, 6);

// beginning
numbers.unshift(1, 2);

// middle
numbers.splice(2, 0, "a", "b");
console.log(numbers);
