//  Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of AJAX lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// Create a program to retrieve the data from the API URL provided above. Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object

let xhr = new XMLHttpRequest();

const requestData = (function () {
  xhr.open(
    "GET",
    "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
  );
  xhr.responseType = "json";
  xhr.send();
})();

xhr.onload = function () {
  if (xhr.status != 200) {
    console.log("error status");
  } else {
    // displayGiphs(xhr.response)
    console.log(xhr.response);
  }
};
