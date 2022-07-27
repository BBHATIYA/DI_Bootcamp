let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);

for (let i in cart) {
  displayCart(cart[i]);
}

function displayCart(obj) {
  let item = document.createElement("p");
  let text = document.createTextNode(
    `Product - ${obj.name}. Price - ${obj.price}`
  );
  item.appendChild(text);
  document.body.appendChild(item);
}

function submitPayment() {
  let elm = document.createElement("button");
  elm.setAttribute("id", "pay");
  let text = document.createTextNode("Submit Payment");
  elm.appendChild(text);
  document.body.appendChild(elm);
}
submitPayment();

document.getElementById("pay").addEventListener("click", () => {
  localStorage.clear();
  console.log(localStorage);
});
