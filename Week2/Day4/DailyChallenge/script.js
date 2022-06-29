let userAnswer = "";
 userAnswer = prompt("Give us several words (separated by commas)");

// console.log(userAnswer);
let strings;
strings = userAnswer;
let usingSplit = strings.split(',');
// console.log(usingSplit);


let width = 0;
for (let i = 0; i < usingSplit.length; i++){
  if (usingSplit[i].length > width){
       width = usingSplit[i].length
  }
}
  for (let i = 0; i<= usingSplit.length; i++){
    if((i == 0) || (i == usingSplit.length)){
      console.log("*".repeat(width))
      continue;
    }
    console.log("*" +usingSplit[i]+ +"\n ".repeat(usingSplit[i].length)+"*");
  }
