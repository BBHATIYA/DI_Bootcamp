//  Exercise 3 : Change The Navbar

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
 document.getElementById('navBar').setAttribute('id', 'socialNetworkNavigation')

// let changeId =
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
const newLi = document.createElement('li');

// Create a new text node with “Logout” as its specified text.
const text = document.createTextNode('Logout');
// Append the text node to the newly created list node (<li>).
newLi.appendChild(text);
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
const addNewLi = document.getElementById('socialNetworkNavigation')
// console.log(addNewLi.firstElementChild );
addNewLi.firstElementChild.appendChild(newLi)

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).z