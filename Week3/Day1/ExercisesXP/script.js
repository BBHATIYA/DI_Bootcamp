// Using Javascript:
// Retrieve the div and console.log it
let div = document.getElementsByTagName('div');

// console.log(div);

// Change the name “Pete” to “Richard”.
let changeName = document.getElementById('container');

changeName.nextElementSibling.lastElementChild.innerText = "Richard"; 
// list1.nextElementSibling.children[1].innerHTML = "richard"

// Change each first name of the two <ul>'s to your name.
let ulChange = document.querySelectorAll('.list')

//  console.log(ulChange); 
// Delete the <li> that contains the text node “Sarah”.
let removeName = document.getElementById('container');

removeName.nextElementSibling.nextElementSibling.children[1].remove();
// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
