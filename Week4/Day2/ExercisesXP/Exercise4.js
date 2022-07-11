// Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

((nameofuser) => {
  let navbar = document.getElementsByClassName("navbar")[0];
  console.log(navbar);
  let div = document.createElement("div");
  let divs = document.createElement("div");
  divs.classList.add("container-fluid");
  let atag = document.createElement("a");
  atag.classList.add("navbar-brand");
  atag.setAttribute;
  let atext = document.createTextNode(`Welcome ${nameofuser}!`);
  let image = document.createElement("img");
  image.classList.add("d-inline-block");
  image.classList.add("align-text-top");
  image.src = "Bhavesh1.jfif";
  image.style.width = "30px";
  image.style.height = "30px";
  atag.appendChild(image);
  atag.appendChild(atext);
  div.appendChild(atag);
  navbar.appendChild(div);
})("Bhavesh");

// ((username) => {
//   let div = document.getElementById("container");
//   let text = document.createTextNode(username);
//   div.appendChild(text);
// })("Bhavesh");

// let div = document.createElement('div');
// let divs = document.createElement('div');
// // divs.classList.add("container-fluid");
// // let atag =document.createElement('a');
// // atag.classList.add("navbar-brand");
// // atag.setAttribute
// // let atext = document.createTextNode(nameofuser);
// // atag.appendChild(atext);
// // let image = document.createElement('img');
// // image.classList.add("d-inline-block");
// // image.classList.add("align-text-top");
// // atag.appendChild(image);
// // div.appendChild(atag);
// console.log(divs);
