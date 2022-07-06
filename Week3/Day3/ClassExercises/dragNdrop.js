//retrieve the item

let item =  document.getElementById("boxToDrop");
item.addEventListener("dragstart", startDragging);

function startDragging (evt) {
	item.classList.replace("draggedItem", "startDragging");
	// in the future, I will drop an element of type
	// "text/plain" because it's an element from the DOM
	// and I will use the id of the item
	// console.log(evt.dataTransfer)
	evt.dataTransfer.setData("text/plain", evt.target.id);
	// this line prepares what will happen in the drop
	// console.log(evt.dataTransfer)
}

//retrieve all the dropzones
let alldropzones = document.getElementsByClassName("dropzone");

function manipulateDropZone(){
	for (let zone of alldropzones){
		zone.addEventListener("dragover", draggingOver);
		zone.addEventListener("drop", dropping)
	}
}

manipulateDropZone()

function draggingOver(evt){
	evt.preventDefault()
	evt.target.style.border = "2px dashed red";
}

function dropping(evt){
	evt.preventDefault();
	let dataNeeded = evt.dataTransfer.getData("text/plain");
	let box = document.getElementById(dataNeeded);
	evt.target.appendChild(box)
}


// button.addEventListener("click")