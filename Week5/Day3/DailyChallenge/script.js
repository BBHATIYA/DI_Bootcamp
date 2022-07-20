// Instructions
// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

let words = ["apple", "pear", "banana"];
let words2 = ["CUCUMBER", "TOMETOS", "AVOCADO", "BEETROOT"];

const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    let allCaps = arr.map((element) => {
      if (typeof element === "string") {
        return element.toUpperCase();
      } else {
        reject("Not all words are strings");
      }
    });
    resolve(allCaps);
  });
};

makeAllCaps(words)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));

const sortWords = (arr) => {
  return new Promise((resolve, reject) => {
    let sorted = arr.sort();
    if (arr.length >= 4) {
      resolve(sorted);
    } else {
      reject("The array has less than 4 elements");
    }
  });
};

sortWords(words2)
  .then((value) => console.log(value))
  .catch((error) => console.log(error + "catch message"));
