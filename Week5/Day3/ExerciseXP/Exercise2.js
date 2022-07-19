// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Add code to catch errors and console.log ‘Ooops something went wrong’.

function checkString() {
  let resolveItself = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolveItself) {
        resolve("success");
      } else {
        reject("Ooops something went wrong");
      }
    }, 4000);
  });
}
checkString()
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
Promise.resolve("success").then((res) => console.log(res));
