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