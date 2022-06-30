// let userAnswer = "";
//  userAnswer = prompt("Give us several words (separated by commas)");

// // console.log(userAnswer);
// let strings;
// strings = userAnswer;
// let usingSplit = strings.split(',');
// // console.log(usingSplit);





let words = ["Hello", "World", "in", "a", "frame"];

function longestWordLength(arr) {
  let len = arr[0].length;
  for (let i = 1; i < words.length; i++) {
      if(arr[i].length > len){
        len = arr[i].length;
      }
  }
  return len;
}

function addSpaces(word,len){
  if(word.length == len){
    return "";
  }
  return " ".repeat(len-word.length);
}

function stars () {
  let len = longestWordLength(words);
  console.log("*".repeat(len+4));
  for(x in words){
    console.log('* ' + words[x] + addSpaces(words[x],len) + ' *');
  }
  console.log("*".repeat(len+4));
}
stars();












