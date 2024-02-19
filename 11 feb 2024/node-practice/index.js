const express = require("express");
const app = express();
app.use(express.json());
const Joi = require("joi");

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

//fetching all courses
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// fetching with particular id
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with given id is not found");

  res.send(course);
});

//create a new course object
app.post("/api/courses", (req, res) => {
  // we need to define a schema

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });
  // then validate and check value or error
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const lastCourse = courses[courses.length - 1];

  if (lastCourse === undefined) {
    const course = {
      id: 1,
      name: req.body.name,
    };
    console.log(course.id);
    courses.push(course);
    res.send(courses);
  } else {
    const course = {
      id: lastCourse.id + 1,
      name: req.body.name,
    };
    console.log(course.id);
    courses.push(course);
    res.send(courses);
  }
});

// update a course object if present
app.put("/api/courses/:id", (req, res) => {
  // first check the course is present or not
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with given id is not found");
  // schema creation
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  //updation
  course.name = req.body.name;
  res.send(course);
});

// delete course object with particular id
app.delete("/api/courses/:id", (req, res) => {
  // checks the course with given id is present or not
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with given id is not found");
  // delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

// set env
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listning on PORT:${port}...`));
