//PROJECT WORD AND GIF
let btnAdd =  document.getElementById("btn");
btnAdd.addEventListener("click", fetchWord);

function fetchWord () {
	fetch('http://random-word-api.herokuapp.com/word?number=1')
	.then(response => {
		if(response.status >= 400 && response.status < 600){
			throw new Error("Error Word API")
		} else {
			return response.json();
		}
	})
	.then(result => {
		let [word] = result;
		fetchGif(word)
	})
	.catch(error => {
		appendGif("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif", `ERROR cannot find word`)
		console.log("IN THE CATCH - fetchWord -", error.message)
	})
}



function fetchGif (wordrandom) {
	fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`) // return a promise with as a result a Response object
	.then(response => {
		if (response.status >= 400 && response.status < 600){
			throw new Error ("ERROR GIF API")	
		} else {
			return response.json();
		}
	})
	.then(result => {
		console.log(result)
		if (result["data"].length === 0){
			throw new Error ("GIF NOT FOUND");
		} else {
			let gif = result["data"]["images"]["original"]["url"];
			appendGif(gif, wordrandom)
		}
		
	})
	.catch(error => {
		appendGif("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif", `ERROR cannot find a gif for the word : ${wordrandom}`)
		console.log("IN THE CATCH - fetchGif -", error.message)
	})
}

function appendGif(gifUrl, word="NO WORD") {
	let div = document.getElementById("container");
	div.textContent = "";
	let p = document.createElement("p")
	let text = document.createTextNode(word)
	p.appendChild(text)
	let imageGif =  document.createElement("img");
	imageGif.setAttribute("src", gifUrl);
	div.appendChild(p);
	div.appendChild(imageGif)
}