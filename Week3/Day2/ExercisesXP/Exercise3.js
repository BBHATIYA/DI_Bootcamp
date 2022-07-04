// Declare a global variable named allBoldItems.

let allBoldItems;

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBold_items(){
    let boldWords = document.getElementsByTagName('strong')
    return allBoldItems = Array.from(boldWords);

}
let boldList = getBold_items();

// console.log(boldList);

// getBold_items();

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
    for (let i = 0; i < boldList.length; i++) {
        // console.log(boldList[i]);
        boldList[i].style.color = "blue";
    }
}
// let colorCall = highlight();
// highlight();

// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal(){
    for (let i = 0; i < boldList.length; i++) {
        // console.log(boldList[i]);
        boldList[i].style.color = "";
    }
}
// let removeColor = return_normal();
// return_normal();

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

//------------ called function in HTML



