const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log(draw);
  },
};

// Object literal syntax is not a good way to create an object and duplicate it.
// The object has one or more than one methods then we say that the object has a behavior.
// the problem arises if there is change in the object then we need to manually change all the similar /copied objects
// the solution is factory or a constructor function

const circle2 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log(draw);
  },
};

//   so now we will make a constructor or a factory function
// FACTORY function
function createCircle(radius) {
  return {
    radius, // similar to writing radius : radius
    location: {
      x: 1,
      y: 1,
    },
    draw: function () {
      console.log(draw);
    },
  };
}

const circle3 = createCircle(3);

// Constructor function

function Circle(radius) {
  // the first letter of the constructor function is always Capital
  (this.radius = radius),
    (this.draw = function () {
      console.log("Draw a circle");
    });
}

const circle4 = new Circle(4);
