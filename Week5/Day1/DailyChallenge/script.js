// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.
// The output should be:

let form = document.forms[0];
// console.log(form);
form.addEventListener("submit", displayAsJson);

function displayAsJson(ev) {
  ev.preventDefault();
  let input = new FormData(ev.target);
  // console.log(input);
  let inobject = Object.fromEntries(input.entries());
  let inputJson = JSON.stringify(inobject);
  // console.log(inputJson);
  let p = document.createElement("p");
  let text = document.createTextNode(inputJson);
  p.appendChild(text);
  document.body.appendChild(p);
}
