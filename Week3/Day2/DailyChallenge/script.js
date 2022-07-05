let libForm = document.forms[0];
// console.log(libForm);

libForm.addEventListener("submit", userInputs);


function userInputs(e){
    e.preventDefault();
    // let nounInputs = document.getElementById('noun');
    // console.log(nounInputs);
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

