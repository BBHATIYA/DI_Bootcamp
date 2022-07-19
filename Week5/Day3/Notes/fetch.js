// // ---------------------
// // FETCH
// // ------------

// // fetch returns a promise with a result - Response Object
// // THE PROMISE IS FULFILLED OR REJECTED
// // The promise has a value, which is a reponse object

console.log(fetch("https://lisenakache.github.io/HttpRequestGithub/tst.json"));

fetch("https://lisenakache.github.io/HttpRequestGithub/tst.json")
  .then((res) => {
    return res.json();
    //the fetch method returns a promise
    // this promise has a result, which is the Response Object
    // if we want to use the Response Object (the result of the fetch)
    // we need to use the then() method to consume it
    // the problem is, the data that the server sent is not readable,
    // to make it readable we need to use the json() method
    // this method is parsing the json string into a JS object
    // BUT this method also returns a promise
    // if I want to use the result of this promise, I need to consume it with a then method
  })
  .then((objAnimals) => console.log(objAnimals));

fetch("https://lisenakache.github.io/HttpRequestGithub/test.json")
  .then((res) => {
    if (res.status !== 200) {
      throw new Error("Wrong response");
    } else {
      return res.json();
    }
  })
  .then((objAnimals) => console.log(objAnimals))
  .catch((error) => console.log(error));

//the parameter of a then method
// is the result of the previous promise

// // // -----------------------
// // // Fetch with DOM
// // // -------------------------

let url = "https://lisenakache.github.io/HttpRequestGithub/test.json";

let btn = document.getElementById("btn");
btn.addEventListener("click", requestData);

function requestData() {
  fetch(url)
    .then((response) => {
      if (response.status == 200) {
        //or response.ok
        return response.json();
      } else {
        throw new Error("not 200");
      }
    })
    .then((jsData) => {
      console.log(jsData);
      displayUser(jsData);
    })
    .catch((error) => {
      console.log("In the catch", error);
      displayError(error);
    });
}

const displayUser = (animals) => {
  let results = document.getElementById("results");
  animals.forEach((info) => {
    let li = document.createElement("li");
    li.textContent = `${info.name} - ${info.species}`;
    results.appendChild(li);
  });
};

const displayError = (xhr) => {
  let error = document.getElementById("error");
  let h2 = document.createElement("h2");
  h2.textContent = `Error`;
  // h2.textContent = `Error : ${xhr.status}`
  h2.style.backgroundColor = "pink";
  error.appendChild(h2);
};
