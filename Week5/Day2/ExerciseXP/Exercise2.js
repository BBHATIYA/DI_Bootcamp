// Exercise 2 : Giphy API
// Instructions
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object

// https://api.giphy.com/v1/gifs/search?limit=10&q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

let xhr = new XMLHttpRequest();

const requestData = (function () {
  xhr.open(
    "GET",
    "https://api.giphy.com/v1/gifs/search?limit=10&q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
  );
  xhr.responseType = "json";
  xhr.send();
})();

xhr.onload = function () {
  if (xhr.status != 200) {
    console.log("error status");
  } else {
    console.log(xhr.response);
  }
};
