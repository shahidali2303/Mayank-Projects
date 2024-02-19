// const person = {
//   name: "Mayank",
//   walk() {
//     console.log("walk");
//   },
// };

// const person2 = {
//   name: "Shahid",
//   walk() {
//     console.log("walk");
//   },
// };

// we made a blue print for a person
class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("Shahid");
console.log(teacher.name);
teacher.walk();
