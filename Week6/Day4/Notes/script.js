// // -------------------------
// // Local storage and object
// // -------------------------

let form = document.getElementById("formfirst");

let allcars = JSON.parse(localStorage.getItem("car")) || [];

const addItem = (e) => {
  e.preventDefault();

  let firstInput = document.getElementById("brand");
  let secondInput = document.getElementById("color");

  if (firstInput.value != "" && secondInput.value != "") {
    let objectItem = {
      brand: firstInput.value,
      color: secondInput.value,
    };

    allcars.push(objectItem);

    localStorage.setItem("car", JSON.stringify(allcars));
  }
};

const displayItem = () => {
  // localStorage.getItem("car") //json string
  let car = JSON.parse(localStorage.getItem("car"));
  console.log(car);
  const p = document.createElement("p");
  const text = document.createTextNode(
    `My car is a ${car["color"]} ${car["brand"]}`
  );
  p.appendChild(text);
  document.getElementById("results").appendChild(p);
};

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", displayItem);

form.addEventListener("submit", addItem);
