// # Exercise
// Create a shopping List
// 1. Create an HTML file
// 2. Create a JS file - Add the below array of objects inside your javascript file.
// 3. Using a self invoking function, and using the DOM - add the products to the page and make them clickable.
// 4. The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage. Each item is an object containing the name of the product and the price.
// 5. When the user is done with his shopping, he will click on the "Pay button" (which is actually an anchor) and it will redirect him to another HTML page. This HTML page is linked to another Javascript file. Using the DOM display all the items that the user bought and the total price he needs to pay as well as a "Submit payment" Button
// 6. When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.

let products = [
  {
    id: 0,
    name: "Deluxe Bicycle",
    url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
    price: 499.98,
  },
  {
    id: 1,
    name: "Super Deluxe bagpack",
    url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
    price: 134.99,
  },
  {
    id: 2,
    name: "Super Duper Scooter",
    url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
    price: 1090.95,
  },
  {
    id: 3,
    name: "Smartphone",
    url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
    price: 399.99,
  },
];

(function () {
  for (let i in products) {
    let elm = document.createElement("form");
    elm.setAttribute("class", "cart-item");
    elm.setAttribute("id", `${products[i].id}`);
    let img = document.createElement("img");
    img.setAttribute("src", products[i].url);
    let text = document.createTextNode(products[i].name);
    let price = document.createTextNode(`Price $${products[i].price}`);
    let submit = document.createElement("button");
    let submitText = document.createTextNode("Add To Cart");
    submit.appendChild(submitText);
    submit.setAttribute("type", "submit");
    elm.appendChild(img);
    elm.appendChild(text);
    elm.appendChild(price);
    elm.appendChild(submit);
    document.body.appendChild(elm);
  }
  payButton();
})();

function payButton() {
  let elm = document.createElement("button");
  let link = document.createElement("a");
  link.setAttribute("href", "pay.html");
  let text = document.createTextNode("Pay Now");
  link.appendChild(text);
  elm.appendChild(link);
  document.body.appendChild(elm);
}
// 4. The user clicks on the item to add them to his cart. The cart is an array of items, saved in the
// localstorage. Each item is an object containing the name of the product and the price.
let cart = [];
let cartItems = document.getElementsByClassName("cart-item");
for (let i = 0; i < cartItems.length; i++) {
  cartItems[i].addEventListener("submit", addItemToCart);
}

function addItemToCart() {
  event.preventDefault();
  let id = Number(event.target.id);
  let item = {
    name: products[id].name,
    price: products[id].price,
  };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
}

// (function () {
//   const addItemOnPage = products.forEach((element) => {
//     let div = document.createElement("div");
//     div.classList.add("item-class");
//     let name = document.createElement("p");
//     let nametext = document.createTextNode(element["name"]);
//     name.appendChild(nametext);
//     div.appendChild(name);

//     let image = document.createElement("img");
//     image.setAttribute("src", element["url"]);
//     image.classList.add("pro-image");
//     div.appendChild(image);

//     let price = document.createElement("p");
//     let pricetext = document.createTextNode(element["price"]);
//     let pricename = document.createElement("span");
//     let priceText = document.createTextNode("Price : ");
//     pricename.appendChild(priceText);
//     price.appendChild(pricename);
//     price.appendChild(pricetext);
//     div.appendChild(price);

//     document.getElementById("main-container").appendChild(div);

//     // let id = document.createElement("p");
//     // let idtext = document.createTextNode(element["id"]);
//     // name.appendChild(idtext);
//     // document.getElementById("main-container").appendChild(id);
//   });

//   return addItemOnPage;
// })();

// let allItems = [];

// const addToCart = (e) => {
//   let items = e.target;
//   // console.log(items);

//   let objectItem = {
//     name: e.target.perentElement.children[0],
//     price: e.target,
//   };
//   // console.log(objectItem);

//   allItems.push(objectItem);
// };
// let itemDiv = document.getElementsByClassName("item-class")[0];
// let itemDiv1 = document.getElementsByClassName("item-class")[1];
// let itemDiv2 = document.getElementsByClassName("item-class")[2];
// let itemDiv3 = document.getElementsByClassName("item-class")[3];

// itemDiv.addEventListener("click", addToCart);
// itemDiv1.addEventListener("click", addToCart);
// itemDiv2.addEventListener("click", addToCart);
// itemDiv3.addEventListener("click", addToCart);

// // console.log(itemDiv);
// console.log(allItems);

// // e.target.parentElement.children[1].childNodes[0].nodeValue;
