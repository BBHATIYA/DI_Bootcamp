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


