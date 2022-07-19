// //---------------------
// //Promises
// //--------------------

// //----------------
// // Pending promises
// // -----------------

let test = new Promise((resolve, reject) => {});
console.log(test);

// pending promise

// // //----------------
// // // Resolved or rejected promises
// // // -----------------

const successStudiesOne = new Promise((resolve, reject) => {
  let grade = 80;

  if (grade >= 70) {
    resolve("Buys a phone");
  } else {
    reject("Low grades");
  }
});

console.log(successStudiesOne);
// the promise is resolved with the result "Buy a phone"

// -----------------
// Faking asynchronous code - code that resolves in 3 seconds
// ------------------

let successStudiesTwo = new Promise((resolve, reject) => {
  console.log("start"); //1
  let grade = 75;

  setTimeout(() => {
    if (grade >= 70) {
      console.log("resolve");
      resolve("Buys a phone");
    } else {
      console.log("reject");
      reject("Low grades");
    }
  }, 3000);
});

console.log(successStudiesTwo);

// //1. First we create the promise- promise is pending
// //2. After 3 second, the promise will be resolved or rejected
// //if the promse is resolved -> the then() method is called
// //else -> the then() method is called
// // the then() method takes an argument which is
// //the returned value of the resolve callback function

// //----------------
// CONSUMING PROMISES
// //----------------

let successStudiesThree = new Promise((resolve, reject) => {
  let grade = 75;
  let giftCard;

  setTimeout(() => {
    if (grade >= 70) {
      giftCard = 500;
      resolve(giftCard);
    } else {
      reject("Low grades");
    }
  }, 3000);
});

for (let i = 0; i < 2000; i++) {
  console.log("hello");
}

console.log(successStudiesThree); //state promise : fulfilled //result promise : giftCard = 500

// the parameter that the then() receives is the result of the first promise
let buyPhone = successStudiesThree.then((gift) => gift - 200);
console.log("buyPhone", buyPhone);

// //----------------
// CHAINING
// //----------------

let successStudiesFour = new Promise((resolve, reject) => {
  let grade = 15;

  setTimeout(() => {
    if (grade >= 70) {
      let giftCard = 500;
      resolve(giftCard);
    } else {
      reject("Low grades");
    }
  }, 3000);
});

successStudiesFour
  .then((gift) => {
    //the parameter gift is the result of the first promise
    console.log("in the first then");
    throw new Error("problem");
    return gift - 300;
  })
  .then((restgift) => {
    //the parameter restgift is the result of the promise returned by the first then
    console.log("in the first then");
    return restgift - 10;
  })
  .catch((error) => console.log("in the catch", error));
// catch will be called if there is an error in the process and the promises are rejected
