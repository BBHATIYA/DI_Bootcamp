let libForm = document.forms[0];
// console.log(libForm);

libForm.addEventListener("submit", userInputs);


function validateIfEmpty(){
    let inputs = document.querySelectorAll('input');
    // console.log(inputs);

    let inputArray = Array.from(inputs);
    // console.log(inputArray);

    let nounInputs =document.getElementById('noun');
    let adjectiveInputs =document.getElementById('adjective');
    let personInputs =document.getElementById('person');
    let verbInputs =document.getElementById('verb');
    let placeInputs =document.getElementById('place');

    // let arrayOfInputs = ['nounInputs', 'adjectiveInputs', 'personInputs', 'verbInputs','placeInputs'];
    
    // for (let i = 0; i < arrayOfInputs.length; i++) {
    //     console.log(arrayOfInputs[i]);
    //     // return arrayOfInputs[i];
    //             if(inputArray[i].value == ""){}
        
    // }
}
// let checkInput = validateIfEmpty();
// console.log(checkInput);

function userInputs(e){
    e.preventDefault();
    
    
    let nounValue = libForm.elements.noun.value;
    let adjectiveValue = libForm.elements.adjective.value;
    let personValue = libForm.elements.person.value;
    let verbValue = libForm.elements.verb.value;
    let placeValue = libForm.elements.place.value;
   
    let getSpan =document.getElementById('story');
    let text = document.createTextNode(`This weekend I am going camping with ${personValue}. I packed my lantern, sleeping bag, and
${nounValue}. I am so ${adjectiveValue} to ${verbValue} in a tent.The place in north called ${placeValue}.`);

    getSpan.appendChild(text);

}



/*--------------------------------Loop solution----------------------------------------------*/

// We need to retrieve the form
// We need to use the event submit - to submit the form
// submit the form
// to avoid the page from refrshing : event.preventDefault()
// access the input - by a form because lot of inputs
// to retrieve the input values - value property
// push the value to the array

// target: the element linked to the events

let formSentence = document.forms.libform;
formSentence.addEventListener("submit", retrieveInputValues);

let allValues = [];

function retrieveInputValues (ev) {
	ev.preventDefault();
	// console.log(ev.target); //the form
	let allInputs = ev.target.getElementsByTagName("input");
	for (let input of allInputs){
		// trim method
		let valueData = input.value;
		console.log("valueData", valueData.length)
		if (valueData === '' || valueData.length === 0){
			console.log("one value is empty")
			allValues = [];
			return;
		} else {
			allValues.push(valueData);
			input.value = ''; //make the values disapear
		}
	} 
	displayValues();
}


function displayValues () {
	console.log("in the displayValues function")
	let sentence = `The ${allValues[1]} ${allValues[0]} ${allValues[3]} in ${allValues[4]} with ${allValues[2]}`;
	let text = document.createTextNode(sentence);
	let span = document.getElementById("story");
	span.appendChild(text)
}
