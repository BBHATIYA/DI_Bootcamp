// 5. When the user is done with his shopping, he will click on the "Pay button" (which is actually an anchor) and it will redirect him to another HTML page. 
//      This HTML page is linked to another Javascript file. Using the DOM display all the items that the user bought and the total price he needs to pay as well as a "Submit payment" Button
// 6. When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.
(()=>{
    let myCart = JSON.parse(localStorage.getItem('cart'));
    let sum = 0;
    let container = document.getElementById('itemsList');

    for (const item of myCart) {
        let itemDetails = document.createElement('div');
        itemDetails.innerText = `${item.name} => ${item.price}`;
        sum += Number(item.price);
        container.appendChild(itemDetails);
    }
    let mySum = document.createTextNode(`Total: ${sum}`);
    container.appendChild(mySum);
})()

document.getElementById('payUp').addEventListener('click', () =>{
    document.getElementById('message').appendChild(
        document.createTextNode('Payment Successful!'));
    localStorage.clear();
})