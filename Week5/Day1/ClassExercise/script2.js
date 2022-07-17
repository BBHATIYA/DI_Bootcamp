// Exercises
// # Exceptions
// ## Exercise 1
// Write a function called `divide` that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."

// function divide(numerator, denominator) {
//   try {
//     let result;
//     if (denominator !== 0) {
//       return numerator / denominator;
//     } else {
//       throw new RangeError("Attempted to divide by zero.");
//     }
//     console.log("result : ", result);
//   } catch (error) {
//     console.log("Not Good", error.message);
//   }
// }

// console.log(divide(2, 3));
// divide(2, 0);

// ## Exercise 2
// Using the code below:
const someVar = "Cannot be reassigned";
try {
  someVar = "Still going to try";
} catch (e) {
  console.log(e);
}
console.log("after");
// 1. Which type of error will be thrown ? Look on the different types errors on Google - TypeError
// 2. Is the console.log("after") will be shown on the console ? - Yes, because we catch the error

// ## Exercise 1
// Write a function called `divide` that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."

// const checkDivision = function (numerator, denominator){
// 	try {
// 		if (denominator !== 0){
// 			return numerator/denominator;
// 		} else {
// 			throw new Error("Attempted to divide by zero.")
// 		}

// 	} catch (err){
// 		console.log("NOT GOOD", err.message)
// 	}
// }

// console.log(checkDivision(2,5));
// //2/5
// checkDivision(2,0);
// // "NOT GOOD" "Attempted to divide by zero."

// // ## Exercise 2
// // Using the code below:
// const someVar = 'Cannot be reassigned';
// try {
//   someVar = 'Still going to try';
// } catch(e) {
//   console.log(e);
//   console.log(e.message);
//   // e is the error that happened in the try block
// }
// console.log("after")

// // 1. Which type of error will be thrown ? Look on the different types errors on Google
// // we cannot redefine a variable declared with const  TypeError
// // // 2. Is the console.log("after") will be shown on the console ?
// // Yes - because we catch the error
