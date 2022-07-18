//----------------
// STEPS
// --------------

//----------------
// WITH onreadystatechange
// ----------------

// // 1. Create XMLHttpRequest object
// let xhr = new XMLHttpRequest();
// //2. Set the request
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// //3. Send the request
// xhr.send();

// //4. Add events
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 0) {
//     // unsent
//     console.log("unsent")
//   } else if(xhr.readyState == 1) {
//     // open called
//     console.log("open called")
//   } else if (xhr.readyState == 2) {
//     // response headers received
//     console.log("response headers received")
//   } else if (xhr.readyState == 3) {
//     // response is loading (a data packet is received)
//     console.log("response is loading")
//   } else if (xhr.readyState == 4) {
//     // request complete
//     console.log("request complete")
//     if (xhr.status != 200) { // analyze HTTP status of the response
//     	displayError(xhr)
//   	} else if (xhr.status === 200) {
//   		console.log(xhr)
//   		console.log(xhr.response, typeof(xhr.response))
//   		let javascriptUsersObject = JSON.parse(xhr.response)
//   		displayUser(javascriptUsersObject)
//   	}
//   }
// };

// const displayUser = (users) => {
// 	let results = document.getElementById("results")
// 	let newusers  = users.filter(user => user.id <= 3)
// 	newusers.forEach(info => {
// 		let li = document.createElement("li");
// 		li.textContent = `${info.name} - ${info.email}`
// 		results.appendChild(li)
// 	});

// }

// const displayError = (xhr) => {
// 	let results = document.getElementById("error");
// 	let h2 = document.createElement("h2");
// 	h2.textContent = `Error : ${xhr.status}`
// 	h2.style.backgroundColor = 'pink'
// }

//--------------
// SET THE RESPONSE
// ----------------

//Before the events, we add
// xhr.responseType = 'json';
//set the response format
//"json" – get as JSON (parsed automatically).

//-----------------
// WITH ONLOAD,ONPROGRESS,ONERROR
// ----------------------

// // 1. Create XMLHttpRequest object
// let xhr = new XMLHttpRequest();

// //2. Set the request
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/');

// //3. Set the response
// xhr.responseType = 'json';

// //4. Send the request
// xhr.send();

// console.log("--------AFTER THE SEND ------------")

// //5. when the request is complete and the response is fully downloaded.
// xhr.onload = function() {
// 	if (xhr.status != 200) {
// 	 	console.log("error status")
// 		displayError(xhr)
// 	} else {
// 		console.log("Finished Loading")
// 		h2.style.backgroundColor = "green";
// 		displayUser(xhr.response)
// 	}
// };

// // 6. triggers periodically while the response is being downloaded
// xhr.onprogress = function(event) {
// 	console.log("progress", xhr)
// };

// //7. when the request couldn’t be made
// xhr.onerror = function(event) {
// 	console.log("error", xhr);
//   	displayError(xhr)
// };

// //8. Check the states
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 0) {
//     // unsent
//     console.log("unsent")
//   } else if(xhr.readyState == 1) {
//     // open called
//     console.log("open called")
//   } else if (xhr.readyState == 2) {
//     // response headers received
//     console.log("response headers received")
//   } else if (xhr.readyState == 3) {
//     // response is loading (a data packet is received)
//     console.log("response is loading")
//   } else if (xhr.readyState == 4) {
//     // request complete
//     console.log("request complete")
//   }
// };

// const displayUser = (users) => {
// 	let results = document.getElementById("results")
// 	let newusers  = users.filter(user => user.id <= 3)
// 	newusers.forEach(info => {
// 		let li = document.createElement("li");
// 		li.textContent = `${info.name} - ${info.email}`
// 		results.appendChild(li)
// 	});

// }

// const displayError = (xhr) => {
// 	console.log("in display error")
// 	let error = document.getElementById("error");
// 	let h2 = document.createElement("h2");
// 	h2.textContent = `Error`;
// 	// h2.textContent = `Error : ${xhr.status}`
// 	h2.style.backgroundColor = 'pink';
// 	error.appendChild(h2);
// }

// console.log("--------AFTER EVERYTHING------------")
// let error = document.getElementById("error");
// let h2 = document.createElement("h2");
// h2.textContent = 'Hellooo';
// h2.style.backgroundColor = 'yellow';
// error.appendChild(h2);

//-------------------------
// WITH EVENTS LISTENERS
// -------------------------

//WITHOUT REFRESHING

// let btn = document.getElementById("btn");
// btn.addEventListener("click", requestData)

// let xhr = new XMLHttpRequest();

// function requestData () {
// 	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/');
// 	xhr.responseType = 'json';
// 	xhr.send();
// }

// //5. when the request is complete and the response is fully downloaded.
// xhr.onload = function() {
// 	if (xhr.status != 200) {
// 	 	console.log("error status")
// 		displayError(xhr)
// 	} else {
// 		console.log("Finished Loading")
// 		console.log(xhr.response)
// 		displayUser(xhr.response)
// 	}
// };

// // 6. triggers periodically while the response is being downloaded
// xhr.onprogress = function(event) {
// 	console.log("progress", xhr)
// 	console.log("event.lengthComputable", event.lengthComputable)
// 	console.log(`Received ${event.loaded} of ${event.total} bytes`)
// };

// //7. when the request couldn’t be made
// xhr.onerror = function(event) {
// 	console.log("error", xhr);
//   	displayError(xhr)
// };

// const displayUser = (users) => {
// 	let results = document.getElementById("results")
// 	let newusers  = users.filter(user => user.id <= 3)
// 	newusers.forEach(info => {
// 		let li = document.createElement("li");
// 		li.textContent = `${info.name} - ${info.email}`
// 		results.appendChild(li)
// 	});

// }

// const displayError = (xhr) => {
// 	console.log("in display error")
// 	let error = document.getElementById("error");
// 	let h2 = document.createElement("h2");
// 	h2.textContent = `Error`;
// 	// h2.textContent = `Error : ${xhr.status}`
// 	h2.style.backgroundColor = 'pink';
// 	error.appendChild(h2);
// }
