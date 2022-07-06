// Create a new HTML file

// Create a banner saying "The sales end in 10min ! " . Style the banner and make it visible to the user after 5 sec.

// let banner =document.getElementById("banner");


// setTimeout(makeAppear, 2000);

// function makeAppear(){
//     banner.classList.remove("dissapper")
// }


// Ex 2
// Use the same code as before but create a countdown in the banner.

// ... "The sales end in 10sec ! "

// ... "The sales end in 9sec ! "

// etc ... until 0


// let btn = document.getElementById('button');

// btn.addEventListener("click", lessSecond);
// let counter = 10;
// let idInterval;

// function lessSecond(){
//   idInterval = setInterval(bannerTimer, 1000);
// }

// function bannerTimer(){
//     if(counter == 0){
//         clearInterval(idInterval)
//     } else{
//         let cont = document.getElementById('container');
//         let p = document.createElement('p');
//         let text = document.createTextNode(`This is the paragraph ${counter}`)
//         p.appendChild(text);
//         cont.appendChild(p);
//         counter--;
//     }
    

// }


let spanSeconds= document.getElementById('spanNumber');

counter = 10;

let idInterval = setInterval(decSecond, 1000);

function decSecond(){
    if(counter ==0){
        clearInterval(idInterval);
    } else{
    counter--;
    spanSeconds.textContent = counter;

    }
}













