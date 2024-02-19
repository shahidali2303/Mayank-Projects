// class componnt
// function

// this always return a reference to the current object

const car = {
  name: "BMW",
  accelerate: function () {
    console.log(this);
  },
};
car.accelerate();

const bike = car.accelerate.bind(car);
bike();
