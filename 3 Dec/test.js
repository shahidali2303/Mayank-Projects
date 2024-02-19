const car = {
  name: "BMW",
  accelerate: function () {
    console.log(this);
  },
};
car.accelerate();
