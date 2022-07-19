// # Promises
// # EXERCISE 1
// Create a function that takes in a single parameter
// and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either
// resolve or reject.
// If the input is a string, the promise resolves with that same string
// uppercased.
// If the input is anything but a string it rejects with that same input.
// Use `then` to repeat the string twice
// use `catch` to console.log the error
// finally call a function that console.log ("congratulation")

const checkParam = function (input) {
  const checkInput = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof input === "string") {
        resolve(input.toUpperCase());
      } else {
        reject(`error ${input}`);
      }
    }, 5000);
  });

  return checkInput;
};

checkParam("hello")
  .then((res) => console.log(res + res)) //HELLOHELLO
  .catch((error) => console.log(error));

checkParam(123)
  .then((res) => console.log(res + res))
  .catch((error) => console.log(error)); //error 123

// function great(greating) {
//   const pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof greating === "string") {
//         resolve(greating.toUpperCase());
//       } else {
//         reject(greating);
//       }
//     }, 5000);
//   });

//   pro
//     .then((firstgreat) => console.log(firstgreat + firstgreat))
//     .catch((error) => console.log("in the catch", error));
// }

// great("congratulation");
// great(123);
