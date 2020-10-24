const X = function() {
  // "this" here is the caller of X
};

const Y = function() {
  // "this" here is NOT the caller of Y
  // "this" found in Y scope
};

/**
 * Regular functions give access to their "calling" environement. Arrow function give access to their "defining" environment.
 */

/**
 * The value of "this" keyword inside a regular function is depends HOW the function was called (OBJECT that made the call)
 */

/**
 * The value of "this" keyword inside an arrow function is depends WHERE the function was defined (the SCOPE that defined the function)
 */

/**
 * Example: output of conole.log(this) is same as testObject.func2()
 */

console.log(this);

const testObject = {
  func1: function() {
    console.log("func1", this);
  },

  func2: () => {
    console.log("func2", this);
  }
};

testObject.func1();
testObject.func2();

// Another cool feature of arrow function.

const squre = a => {
  return a * a;
};

const squre1 = a => a * a;

const squre2 = a => a * a;

// functional programming

[1, 2, 3, 4].map(a => a * a);
