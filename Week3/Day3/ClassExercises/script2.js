// //Exercise1

// // 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// // 2. Add one button per color inside the div container (do it directly in the JS)
// // 3. Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)

let colors = ["blue", "yellow", "green", "pink"];

function addButton(){
	let div = document.getElementById("containerbtn")
	for (let i = 0; i<colors.length; i++){
		let btn = document.createElement("button");
		let text = document.createTextNode(colors[i]);
		btn.classList.add("btn-big");
		btn.addEventListener("click", changeBackground);
		btn.appendChild(text);
		div.appendChild(btn)
	}
}

addButton()


function changeBackground (ev){
	let colorBtn = ev.target.textContent
	document.body.style.backgroundColor = colorBtn;
}

// Exercise 2

let pics = [
	"https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

//1. retrieve the button
let btnImage = document.getElementById("btnimg"); //accessing button by id
let div = document.getElementById("container"); //accessing div by id

btnImage.addEventListener("click", addImages) // adding event eventlistner to button

function addImages(){
	for (let i = 0; i<pics.length; i++) { //looping pics array(which contains images)
		let newimg = document.createElement("img");// creating img tag
		newimg.classList.add("img-small") // adding class to image
		newimg.setAttribute("src", pics[i]);// adding attribute (src) to img tag

		//create a deletebutton
		let btndelete =  document.createElement("button"); // creating buttons
		let textbtn = document.createTextNode(`delete pic ${i+1}`) // creating text 
		btndelete.appendChild(textbtn) // adding text to buttons
		btndelete.addEventListener("click", deleteImg)// adding eventlistner with function that delete img

		div.appendChild(btndelete)//adding buttons to div
		div.appendChild(newimg);//adding images to div
	}
}


function deleteImg(ev){ //function for delete image
	// console.log(ev.target) //button we clicked
    let deletebtn = ev.target;
	// console.log(ev.target.nextElementSibling) //image that is a next sibling of the button
	let imgsibling = ev.target.nextElementSibling;//accessing image by nextElementsibling
	imgsibling.remove()// deleting image
    deletebtn.remove()// deleting button with image
}