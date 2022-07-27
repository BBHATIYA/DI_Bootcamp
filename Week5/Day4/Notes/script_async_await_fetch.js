// "old" way

function retrieveName() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((result) => result.json())
    .then((objName) => console.log(objName["name"]));
}

// retrieveName()

async function retrieveName() {
  try {
    let result = await fetch("https://jsonplaceholder.typicode.com/users/1");
     //value of the result of the promise
    let objName = await result.json();
    // result.json() returns a promise, in order to retrieve the result of this
    // promise I need to await
    console.log(objName);
  } catch (error) {
    console.log(error);
  }
}

retrieveName();

// //----------------------
// // ASYNC AWAIT USING FETCH
// // ----------------------

// // ---------------
// // ERROR HANDLING STEP BY STEP
// //-----------------

let btn = document.getElementById("btn");
btn.addEventListener("click", displayAll);

// // Explain the steps
async function getUser() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (response.status >= 400 && response.status < 600) {
    throw new Error("Bad response from server");
  } else {
    return response.json();
  }
}

async function getGifs(user) {
  let responsegif = await fetch(
    `https://api.giphy.com/v1/gifs/random?tag=${user.username}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  );
  if (responsegif.status >= 400 && responsegif.status < 600) {
    throw new Error("Bad response from server");
  } else {
    return responsegif.json();
  }
}

async function displayAll() {
  try {
    let user = await getUser();
    let gif = await getGifs(user);
    console.log(gif["data"]["title"]);
  } catch (err) {
    console.log(err.message);
  }
}

// //Exercise
// // Redo the exercise of yesterday (gif and word) using async await and
// // try and catch
