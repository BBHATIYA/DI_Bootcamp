// // // -----------------
// // // ASYNC
// // // ----------------

// // "old" way
function sayHello(username) {
  return new Promise(function (resolve, reject) {
    resolve(`Hello ${username}`);
  });
}

// // new way - syntactic sugar
async function sayHelloTwo(username) {
  return `Hello ${username}`;
}

console.log(sayHelloTwo("John"));

// if the async function returns a value, this value will be
// the result of the resolved promise

async function sayHelloError(username) {
  throw new Error("WRONG");
}

console.log(sayHelloError("John"));
// the function will return a rejected promise
// the value of the reject promise is the erro

async function sayHelloTwo(username) {
  if (username === "John") {
    return `Hello ${username}`;
  } else {
    throw new Error("You are not John");
  }
}

sayHelloTwo("John")
  .then((res) => console.log(res)) //we go here
  .catch((err) => console.log(err));

sayHelloTwo("Tom")
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); //we go here

// // // ---------------
// // // Differences
// // // --------------

// "old" way
const learnJSFirst = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Javascript DONE");
    }, 3000);
  });
};

learnJSFirst().then((value) => console.log("value", value));

//With Async, Await
// await
// -> 1) call the function
// -> 2) retrive the value of the promise

const learnJSSecond = () => {
  console.log("in the promise func"); //3
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Javascript DONE");
    }, 3000);
  });
};

async function checkPromises() {
  console.log("in the async"); //2
  let result = await learnJSSecond();
  //result : 'Javascript DONE'
  console.log("hello");
  console.log("result", result);
  return result;
}

checkPromises(); //1

// // await keyword is waiting for the promise to come  back settled
// // and retrieves the result of the promise

// for (let i = 0; i<2000; i++){
//     console.log("hello")
// }

// // //-------------------------
// // // ASYNC AWAIT
// // //----------------------

async function learnJSBootcamp() {
  //3
  return "I know JS";
}

async function learnReactBootcamp() {
  return "I know React";
}

async function checkLanguages() {
  let js = await learnJSBootcamp(); //2 call learnJSBootcamp
  console.log(js); // 4. wait - equal to what was returned from the async func
  let react = await learnReactBootcamp(); //5.
  console.log(react); //6. wait - equal to what was returned from the asyn func
}

checkLanguages(); //1

function addDom() {
  for (let i = 0; i < 20; i++) {
    let p = document.createElement("p");
    let text = document.createTextNode("hello");
    p.appendChild(text);
    document.body.appendChild(p);
  }
}

addDom();

// const check = async function () {

// }

// const check = async () => {

// }
