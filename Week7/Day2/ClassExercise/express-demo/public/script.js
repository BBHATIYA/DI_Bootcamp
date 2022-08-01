// const { arrayBuffer } = require("stream/consumers");

function getProduct() {
  fetch("http://localhost:5000/api/products")
    .then((res) => res.json())
    .then((data) => {
      addToPage(data);
    })
    .catch((e) => {
      console.log(e);
    });
}

getProduct();

function addToPage(arr) {
  const root = document.getElementById("root");
  console.log(root);
  arr.forEach((item, i) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerHTML = item.name;
    div.appendChild(h2);

    const p = document.createElement("p");
    p.innerHTML = item.price;
    div.appendChild(p);
    root.appendChild(div);
  });
}
