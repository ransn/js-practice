// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

{
  {
    {
      // Nested scope. we can access variable v outside nested scope.
      // To avoid, use let instead of var
      var v = 49;
    }
  }
}
appDiv.innerHTML = v;

// ======================================== //

{
  //Block scope
}

if (true) {
  //Block scope
}

// ======================================== //
// We can access index i outside for loop as we are using var which is problamatic. To avoid, use let.
const appDiv1 = document.getElementById("app1");
for (var i = 0; i < 10; i++) {
  //Block scope
}
// Below line prints value 10, to avoid use let instead of var
appDiv1.innerHTML = i;

// ======================================== //
// Note: Function scope is different than block scope we cannot access variable result even we defined as var.

function sum(a, b) {
  // Function scope
  var result = a + b;
}

sum(2, 3);
//appDiv.innerHTML = result;

// **************************** //

// const

// const generally use when references are constant (i.e references are immutable.)
// Note: Here references are immutable not values.
// If we define const with Scalar values (integer / String) then both value and references are immutable.

const appDiv2 = document.getElementById("app2");

const appValue = 42;
/*
  A big program
*/

// appValue remains same 42.

let appValue1 = 23;

/*
  A big program
*/

// appValue1 may not remain same 23.
