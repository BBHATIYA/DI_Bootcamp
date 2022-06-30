function playTheGame(){
    let question = "Would you like to play the game?\n Press OK to continue or Cancel to go out.";
    if(confirm(question) == false){
        alert(question = "No problem, Goodbye.."); 
    }
    return askForNumber()
}

function askForNumber() {
    let userNumber = prompt("Please enter a number from 1 to 10");
    userNumber = Number(userNumber);
    

    if (isNaN(userNumber)) {
        alert("I asked for a NUMBER. Goodbye.");
        return
    }
    else if (userNumber < 0 || userNumber > 10) {
        alert("I asked for a number from 1-10. Goodbye");
        return
    }
    else {
        var computerNumber = Math.floor((Math.random() * 11) + 0);
    }
    console.log(userNumber, computerNumber);
    let tries = 1
    while(compareNumbers(userNumber, computerNumber)){
             userNumber = Number(prompt("Try again"))
             tries++
             if (tries == 3) {
                return alert("Too many attempts")
             }
    }
}

function compareNumbers(userNumber, computerNumber) {
    if (userNumber===computerNumber) {
        alert("WINNER");
        return false
    }
    else if(userNumber > computerNumber) {
    //    userNumber = Number(prompt(askForNumber("Your number is bigger then the computer's, guess again"))
       alert("too big")
       return true

    }

    else if(userNumber < computerNumber) {
        // userNumber = Number(prompt("Your number is smaller then the computer's, guess again"))
        alert("too small")
        return true
 
    }
}