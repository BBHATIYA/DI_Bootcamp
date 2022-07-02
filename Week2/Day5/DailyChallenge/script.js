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




// let add = 1;
// let count = 99;
// while (count > 0) {
//     // console.log(count + " " + getBottleWord(count) + " of beer on the wall");
//     console.log(count + " " + getBottleWord(count) + " of beer,");
//     // console.log("Take _" + takeDown(add) + "_ down, pass it around,");
//     count = count - 1;
//     if (count > 0) {
//         console.log(count + " " + getBottleWord(count) + " of beer on the wall.");
//     } else {
//         console.log("No more " + getBottleWord(count) + " of beer on the wall.");
//     }
// }

// while( add > 99){
//   console.log("Take _" + takeDown(add) + "_ down, pass it around,");
// }

// function getBottleWord(count) {
//     return count === 1 ? "bottle" : "bottles";

//     // if(count = 1){
//     //   return bottle;
//     // } else {
//     //   return bottles;
//     // }

// }

// function takeDown(add){
//  for (let i = 1; i < 99; i+=1){
//     console.log(i)
//   }
// }

// // takeDown(add);

