//const PI = Math.PI;
//const E = Math.E;
//const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 } = Math;

console.log(PI);

// Somewhare in react app
const { Component, Fragment, useState } = require("react");
//useState()

const circle = {
  label: "CircleX",
  radius: 2
};

const circleArea = ({ radius }, { precision = 2 } = {}) =>
  (PI * radius * radius).toFixed(precision);

console.log(circleArea(circle, { precision: 5 }));

const [first, second, , forth] = [10, 20, 30, 40];

console.log(forth);

// In react

// const [value, setValue] = useState(initialValue);
