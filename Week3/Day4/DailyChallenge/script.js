// Create an empty array : let listTasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

let listTasks = [];

let formItem = document.forms[0];

formItem.addEventListener("submit", addTask);

function addTask(ev) {
  ev.preventDefault();

  let userItem = formItem.elements.inputText.value;
  listTasks.push(userItem);
  console.log(listTasks);
}

let btndisplay = document.getElementById("myButton");
btndisplay.addEventListener("click", displayBooks);

function displayBooks() {
  let div = document.getElementById("listTasks");
  let ulItem = document.createElement("ul");
  //   console.log(ul);

  for (let i = 0; i < listTasks.length; i++) {
    let eachItem = listTasks[i];
    // console.log(eachItem);
    let li = document.createElement("li");
    let text = document.createTextNode(`${eachItem[userItem]}`);
    li.appendChild(text);
    ulItem.appendChild(li);
  }
  div.appendChild(ulItem);
}
