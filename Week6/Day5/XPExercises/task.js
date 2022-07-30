(function getData() {
  let data = JSON.parse(localStorage.getItem("task"));

  // shoring by date
  data.sort((a, b) => {
    return new Date(a.startdate) - new Date(b.startdate);
  });

  for (let i = 0; i < data.length; i++) {
    const results = document.getElementById("results");
    // console.log(results);

    let taskname = data[i].taskname;
    let startdate = data[i].startdate;
    let enddate = data[i].end;
    let desc = data[i].description;
    let isCompleted = data[i].isCompleted;
    let x = document.createElement("button");
    let removeAll = document.getElementById("clear");
    let li = document.createElement("li");
    li.innerText = `Task description: ${desc}`;

    //invoke function that clears localStorage
    removeAll.addEventListener("click", clearStorage);
    x.setAttribute("type", "button");
    x.setAttribute("class", "x");
    x.innerText = "X";

    // eventlistner to remove event task
    x.addEventListener("click", clear);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    checkbox.addEventListener("click", checked);
    let taskbtn = document.createElement("button");

    // to display description of task
    taskbtn.addEventListener("click", display);

    // invoke function on double click that lets you edit the task
    taskbtn.addEventListener("dblclick", edit);
    taskbtn.setAttribute("type", "button");
    taskbtn.setAttribute("class", "dropbtn");

    // Calculates the days left
    let datecalc = Math.round(
      Math.abs(Date.parse(startdate) - Date.parse(enddate)) /
        1000 /
        60 /
        60 /
        24
    );

    taskbtn.innerText = `${taskname} ${startdate} days left: ${datecalc}`;

    if (datecalc == 0) {
      taskbtn.style.backgroundColor = "grey";
    }
    li.style.display = "none";
    taskbtn.append(li);
    taskbtn.append(x);
    taskbtn.append(checkbox);
    results.append(taskbtn);
    function clear(e) {
      if (confirm("Are you sure, you want to delete the task?")) {
        taskbtn.remove();
      }
    }

    // Turns the task green if the checkbox is checked, if not, keeps it red or turns it back to red
    function checked() {
      if (checkbox.checked) {
        //set the task to Complete to TRUE on check, and change to green and append to complete task page
        data[i].isComplete = true;
        taskbtn.style.backgroundColor = "green";
        // console.log(data);
        let completed = document.querySelector(".completed");
        completed.append(taskbtn);
        // SETS TASK COMPLETE TO FALSE ON UNTICK
        //set task to FALSE on uncheck
      } else if (checkbox.checked == false) {
        taskbtn.style.backgroundColor = "red";
        data[i].isComplete = false;
        let id = document.getElementById("results");
        id.append(taskbtn);
      }
    }
    function display() {
      li.style.display = "block";
    }

    function edit(e) {
      let changeName = prompt("Edit your task name:");
      let changeDesc = prompt("Edit your task description:");
      taskbtn.innerText = `${changeName} ${startdate} days left: ${datecalc}`;
      taskbtn.append(x);
      taskbtn.append(checkbox);
      li.innerText = `Task description: ${changeDesc}`;
      taskbtn.append(li);
    }
  }
})();

// Clears localStorage and removes all tasks
function clearStorage() {
  localStorage.clear();
  let results = document.getElementById("results");
  results.innerHTML = " ";
}
