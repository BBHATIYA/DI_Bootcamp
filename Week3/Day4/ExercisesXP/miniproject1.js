let arrayColors = ["blue", "red", "yellow", "green"];
// you can use an array rgba colors or hex colors


function addColors (){
	let palletSection = document.getElementById("pallet")
	for(let color of arrayColors){
		let divColor = document.createElement("div");
		divColor.style.backgroundColor = color;
		palletSection.appendChild(divColor);
		divColor.addEventListener("click", pickColor)
	}
}


addColors()

function addGrid () {
	let height= 40;
	let width= 40;
	let gridPaintSection = document.getElementById("gridPaint")
	for (let i = 0; i<height*width; i++){
		let divColor = document.createElement("div");
		gridPaintSection.appendChild(divColor)
	}

}

addGrid()

let colorPicked;

function pickColor(evt){
	colorPicked = evt.target.style.backgroundColor;
	console.log(colorPicked)
}
