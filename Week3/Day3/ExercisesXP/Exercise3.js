let item = document.getElementById("box");
item.addEventListener("dragstart", startDragging);

function startDragging(evt) {
  evt.dataTransfer.setData("text/plain", evt.target.id);
}

let dropZon = document.getElementById("target");

function manipulateDropZone() {
  dropZon.addEventListener("dragover", draggingOver);
  dropZon.addEventListener("drop", dropping);
}

manipulateDropZone();

function draggingOver(evt) {
  evt.preventDefault();
  evt.target.style.border = "2px dashed red";
}

function dropping(evt) {
  evt.preventDefault();
  let dataNeeded = evt.dataTransfer.getData("text/plain");
  let box = document.getElementById(dataNeeded);
  evt.target.appendChild(box);
}
