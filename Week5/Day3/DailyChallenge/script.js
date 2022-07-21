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

// Lise solution

// // 1st daily challenge

// const makeAllCaps = function (arr) {
//   return new Promise((resolve, reject) => {
//     let result = arr.every((elem) => typeof elem === "string");
//     if (result) {
//       let newArr = arr.map((elem) => elem.toUpperCase());
//       resolve(newArr);
//     } else {
//       reject("Not all items are strings");
//     }
//   });
// };

// const sortWords = function (arrUppercased) {
//   return new Promise((resolve, reject) => {
//     if (arrUppercased.length > 4) {
//       resolve(arrUppercased.sort());
//     } else {
//       reject("Length not big enough");
//     }
//   });
// };

// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"]) //this is a rejected promise - we go directly to the catch
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error)); // "Not all items are strings"

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"]) //promise resolved - consumed by the then
//   .then((arr) => sortWords(arr)) //promise returned by the sortWords function will be rejected - we go directly to the catch
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error)); // the error is the reason passed to the reject function
// // "Length not big enough"

// // //in this example, you should see in the console,
// // // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"]) //the function returns a promise that is resolved - it's going to be consumed by the then method
//   .then((arr) => sortWords(arr)) //the function returns a promise that is resolved - it's going to be consumed by the then method
//   .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//   .catch((error) => console.log(error));
