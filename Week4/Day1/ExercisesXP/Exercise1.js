// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.

// #1
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(a);
}

// run in the console:
q1(); // 3

//#2
var a = 0;
function q2() {
  a = 5;
}

function q22() {
  alert(a);
}

// run in the console:
q22(); // 0
q2(); // redefining value to a
q22(); // 5

//#3
function q3() {
  window.a = "hello";
}

function q32() {
  alert(a);
}

// run in the console:
q3(); // redefining value to a
q32(); //hello

//#4
var a = 1;
function q4() {
  var a = "test";
  alert(a);
}

// run in the console:
q4(); //test

//#5
var a = 2;
if (true) {
  var a = 5;
  alert(a);
}
alert(a);
//5
//5
