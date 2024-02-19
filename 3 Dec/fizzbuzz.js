// divisibe by 3 -> Fizz
// divisible by 5 _> Buzz
// divisible by both 3 and 5 -> FizzBuzz
const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    return "fizzBuzz";
  }
  if (input % 3 === 0) {
    return "Fizz";
  }
  if (input % 5 === 0) {
    return "Buzz";
  }
}
