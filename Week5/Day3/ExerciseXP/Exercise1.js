// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.

const compareToTen = function (num) {
  const checkInput = new Promise((resolve, reject) => {
    if (num < 10) {
      resolve(`${num} is bigger than 10, Success!`);
    } else {
      reject(`${num} is less than 10, Error!`);
    }
  });
  return checkInput;
};

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
