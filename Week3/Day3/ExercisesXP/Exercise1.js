// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// const helloTimeout = setTimeout(myGreeting, 2000);

function myGreeting() {
  alert("Hello Word!")
}



// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

const paragraphTimeout = setTimeout(printHello, 2000);


function printHello(){
    let div = document.getElementById('container');
    let p = document.createElement('p');
    let text = document.createTextNode('Hello World');
    p.appendChild(text);
    div.appendChild(p);
}

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let  counter = 0;
let idInterval = setInterval(everyTwoSecond, 2000);

function everyTwoSecond(){
  if(counter == 4){
    clearInterval(idInterval)
  } else{
    let div = document.getElementById('container');
    let p = document.createElement('p');
    let text = document.createTextNode('Hello World');
    p.appendChild(text);
    div.appendChild(p);
    counter++;
  }
}