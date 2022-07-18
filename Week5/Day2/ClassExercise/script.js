// Exercise
// # AJAX
// - Make an HTTP request using the GET METHOD on this API:
// https://jsonplaceholder.typicode.com/users
// - Use the method onload, onprogress, onerror
// - If there is no error, display on the page the name, email, city of the 3 first users

let btn = document.getElementById("btn");
btn.addEventListener("click", requestData);

let xhr = new XMLHttpRequest();

function requestData() {
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.responseType = "json";
  xhr.send();
}

xhr.onload = function () {
  document.body.style.backgroundColor = "white";
  if (xhr.status != 200) {
    console.log("error status");
    displayError(xhr);
  } else {
    console.log("finished Loading");
    console.log(xhr.response);
    displayUser(xhr.response);
  }
};

xhr.onprogress = function (event) {
  console.log("progress", xhr);
  document.body.style.backgroundColor = "red";
};

xhr.onerror = function (event) {
  console.log("error", xhr);
  displayError(xhr);
};

const displayUser = (animals) => {
  let results = document.getElementById("results");
  animals.forEach((info) => {
    let li = document.createElement("li");
    li.textContent = `${info.name} - ${info.email} - ${info.address.city}`;
    results.appendChild(li);
  });
};

const displayError = (xhr) => {
  console.log("in display error");
  let error = document.getElementById("error");
  let h2 = document.createElement("h2");
  h2.textContent = `Error: ${xhr.status}`;
  h2.style.backgroundColor = "pink";
  error.appendChild(h2);
};
