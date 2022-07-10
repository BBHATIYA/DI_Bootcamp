// // Exercise 1 : guess what will be console logged, and explain why

// let text = "Hello";

// function checkText() {
//   console.log("In the function", text);
//   text += " World";
//   console.log("Still in the function", text);
// }

// console.log("before the function", text);

// checkText();

// console.log("after the function", text);

// // Exercise 2 : guess what will be console logged, and explain why

// let friend = "Harry";

// function checkfriend() {
//   let friend = "Alice";
//   console.log("In the function", friend);
//   friend += " Smith";
//   console.log("Still in the function", friend);
// }

// console.log("before the function", friend);

// checkfriend();

// console.log("after the function", friend);

// # Functions & Arrow functions
// ## Exercise 1:
// 1. Greet the user with his name, the user's name is a parameter. Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function

// function declaration
// function welcome(username) {
//   alert(`Hello ${username}`);
// }

// welcome("John");

// // function expression
// const welcomeSecond = function (username) {
//   alert(`Hello ${username}`);
// };

// welcomeSecond("John");

// //arrow function
// const welcomeThird = (username) => alert(`Hello ${username}`);
// welcomeThird("John");

// const welcomeFourth = (username) => alert(`Hello ${username}`);
// welcomeFourth("John");

//  Exercise 2: Function & Arrow function & Ternary Operator
// 1. Check if the user's age is higher than 18. Use ternary operator.
// - if the user's age is higher than 18, return "You can drive"
// - else, return "You cannot drive"
// Do this exercise,
// * first by using function declarations
// * then function expression,
// * then arrow function

// function declarations
function userAge(age) {
  let check = age > 18 ? "you can drive" : "you can't drive";
  return check;
}
let result = userAge(20);
console.log(result);

// function expression

const userAgeTwo = function (age) {
  let check2 = age > 18 ? "you can drive" : "you can't drive";
  return check2;
};
let result2 = userAgeTwo(17);
console.log(result2);

// arrow function

const userAgeThird = (age) => (age > 18 ? "you can drive" : "you can't drive");

let result3 = userAgeThird(23);
console.log(result3);
