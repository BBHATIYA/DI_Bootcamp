// Exercise # ANONYMOUS FUNCTIONS
// 1. Add in your html file a div with an id of container
// 2. Create a self invoking function that takes one parameter the name of the user
// 3. When invoked, the function adds the name of the user in a sentence in the div

// Expression
(function (username) {
  let div = document.getElementById("container");
  let text = document.createTextNode(username);
  div.appendChild(text);
})("Bhavesh");

// arrow function
((username) => {
  let div = document.getElementById("container");
  let text = document.createTextNode(username);
  div.appendChild(text);
})("Bhavesh");

// Same as above
// (username => {
//   let div = document.getElementById("container");
//   let text = document.createTextNode(username);
//   div.appendChild(text);
// })("Bhavesh");



// Exercise 2