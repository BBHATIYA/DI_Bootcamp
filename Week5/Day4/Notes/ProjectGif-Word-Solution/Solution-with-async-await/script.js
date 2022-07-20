//PROJECT WORD AND GIF
let btnAdd =  document.getElementById("btn");
btnAdd.addEventListener("click", combine);

async function fetchWord () {
	let responseWord = await fetch('http://random-word-api.herokuapp.com/word?number=1')
	if(responseWord.status >= 400 && responseWord.status < 600){
		throw new Error("ERROR cannot find word")
	} else {
		let result = await responseWord.json();
		return result[0];
	}
}

async function fetchGif (wordrandom) {
	let responseGif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
	if (responseGif.status >= 400 && responseGif.status < 600){
		throw new Error ("ERROR cannot find gif")	
	} else {
		let resultGif = await responseGif.json();
		return resultGif
	}
}

async function combine (){
	let word;
	try {
		word = await fetchWord();
		let gifObj = await fetchGif(word);
		if (gifObj["data"].length === 0){
			throw new Error ("GIF NOT FOUND - WORD TOO STRANGE");
		} else {
			let gif = gifObj["data"]["images"]["original"]["url"];
			appendGif(gif, word)
		}
	} catch (error) {
		appendGif("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif", `ERROR cannot find a gif for the word : ${word}`)
		console.log("IN THE GENERAL CATCH", error.message)
	}
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