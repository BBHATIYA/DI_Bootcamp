let beerNum = prompt("Write a number to begin counting down bottles");
    beerNum = Number(beerNum);

function getPluralWord(off) {
    return off === 1 ? "it" : "them";
}

// let beerNum = 99;
let word = "bottles";
let off = 1;
function beer(){
      while (beerNum > 8) {
          // console.log(beerNum + " " + word + " of beer on the wall");
          console.log( "We have now "+ beerNum + " " + word );
          
          console.log("Take " +off+" down, pass " + getPluralWord(off)+ " around");
          beerNum -= off;
            off++;
            
      }
      console.log("No bottle of beer on the wall");
}
beer();



// Second way to do it 

// let bottles;
// do{
//   bottles = Number(prompt("How many bottles?"));
// } while(isNaN(bottles) || bottles < 1);
// let song = "";
// for(i=1; bottles > 0; i++){
//   if(i > bottles){
//     i = bottles;
//   }
//   let itThem = "them";
//   if(i == 1){
//     itThem = "it"
//   }
//   let numBottles = "bottles";
//   if(bottles == 1){
//     numBottles = "bottle";
//   }
//   song += `${bottles} ${numBottles} of beer on the wall\n${bottles} ${numBottles} of beer\nTake ${i} down, pass ${itThem} around\n`;
//   bottles -= i;
//   if(bottles == 1){
//     numBottles = "bottle";
//   }
//   song += `${bottles} ${numBottles} of beer on the wall\n---------\n`;
// }

// console.log(song);

// Second way to do it




//Ziv solution 

// let bottles = 0;
// for (let i = 99; i > 0; i -= bottles) {
//   bottles++;
//   console.log(`${i} bottles of beer on the wall`);
//   console.log(`${i} bottles of beer`);
//   if(i>bottles){
//     console.log(`Take ${bottles} down, pass it around`);
//     console.log(`${i-bottles} bottles of beer on the wall`);
//   }
//   else{
//     console.log(`Take ${i} down, pass it around`);
//     console.log(`0 bottles of beer on the wall`);
//   }
//   console.log('#######################################');
// }

//Ziv solution 