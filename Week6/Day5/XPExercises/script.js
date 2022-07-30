(function () {
  const submit = document.getElementById("submit");
  console.log(submit);
  submit.addEventListener("click", task);
})();

let array = [];

function task(e) {
  e.preventDefault();

  const taskname = document.getElementById("taskname");
  const description = document.getElementById("desc");
  const startdate = document.getElementById("startdate");
  const enddate = document.getElementById("enddate");

  let task = {};

  task["taskname"] = taskname.value;
  task["description"] = desc.value;
  task["startdate"] = startdate.value;
  task["end"] = enddate.value;
  task["isComplete"] = false;

  array.push(task);
  console.log(array);

  // set in localStorage and converting to string
  localStorage.setItem("task", JSON.stringify(array));
}
