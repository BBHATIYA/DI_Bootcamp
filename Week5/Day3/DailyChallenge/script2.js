// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.
let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

const toJs = (str) => {
  return new Promise((resolve, reject) => {
    if (str.length === 0) {
      reject("Morse object is empty");
    } else {
      let obj = JSON.parse(str);
      resolve(obj);
    }
  });
};

let object = toJs(morse)
  .then((value) => toMorse(value))
  .then((response) => displayResult(response))
  .catch((error) => console.log(error + " error catch"));

const toMorse = (obj) => {
  return new Promise((resolve, reject) => {
    let str = prompt("enter a word");
    let arrStr = str.split("");
    let returnArr = [];

    for (let i = 0; i < arrStr.length; i++) {
      if (arrStr[i] in obj) {
        returnArr.push(obj[arrStr[i]]);
      } else {
        reject("One letter of the prompt doesn't exist in the object");
      }
    }
    resolve(returnArr);
  });
};

const displayResult = (arr) => {
  let str = "";
  arr.forEach((element) => {
    str += `${element}\n`;
  });
  document.querySelector(".container").innerText = str;
};
