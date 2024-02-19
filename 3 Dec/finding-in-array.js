const num = [1, 2, 3, 1, 4];

// finding elements
console.log(num.indexOf(1));
console.log(num.lastIndexOf(1));

console.log(num.includes(2)); // true if element present

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const findCourse = courses.find(function (c) {
  return c.name === "a"; // return the object
});
console.log(findCourse);
