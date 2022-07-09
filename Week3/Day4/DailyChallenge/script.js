// Create an empty array : let listTasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

let listTasks = [];

let UserInput = document.querySelector("[name~=uinput]");
// console.log(UserInput);

let button = document.getElementById("myButton");

button.addEventListener("click", addTask);

function addTask(ev) {
  ev.preventDefault();
  if (UserInput.value.length !== 0) {
    let item = document.getElementById("inputText").value;
    let text = document.createTextNode(item);
    let label = document.createElement("label");
    label.classList.add("fa-solid", "fa-xmark");

    //   <i class="fa-solid fa-square-x"></i>;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    let newItem = document.createElement("p");

    newItem.appendChild(label);
    newItem.appendChild(checkbox);
    newItem.appendChild(text);
    document.getElementById("listTasks").appendChild(newItem);

    listTasks.push(item);
    console.log(listTasks);
  }
  return clear();
}

function clear() {
  inputText.value = "";
}
