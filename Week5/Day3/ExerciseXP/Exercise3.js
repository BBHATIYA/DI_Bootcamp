// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.

Promise.resolve(3).then((res) => console.log(res));

// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
function resolved(result) {
  console.log("Resolved");
}

function rejected(result) {
  console.error(result);
}
Promise.reject(new Error("Boo!")).then(resolved, rejected);

// function checkValue(value) {
//   return new Promise((resolve, reject) => {
//     if (value === 3) {
//       resolve("Success, value is 3");
//     } else {
//       reject("Boo!");
//     }
//   });
// }
// checkValue(3)
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));
