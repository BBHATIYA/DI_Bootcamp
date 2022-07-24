document.querySelector(".convert").addEventListener("click", async () => {
  let to = document.querySelector("#to").value;
  let number = document.querySelector("#number").value;
  let curr = document.querySelector("#from").value;

  if (to === "" || number === "" || curr === "" || number < 1) {
    alert("Check values");
  } else {
    try {
      let data = await fetch(
        `https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/latest/${curr}`
      );
      if (data.status !== 200) {
        throw new Error("Something went wrong");
        console.log("Error Thrown");
      }
      let dataJson = await data.json();
      let result = dataJson.conversion_rates;
      console.log(result);

      let res = result[to] * number;

      document.querySelector(".res").innerText = res;
    } catch (err) {
      console.log(err);
      console.log("Catch error");
    }
  }
});




// const apiKey = '0b7ed1dab21f56a7222accb4'; //API code
// fillOptions(); //Filling select elements with currencies
// ​
// const theForm = document.getElementById("convert");
// theForm.addEventListener('submit', handleSubmit);
// ​
// async function getCodes(){ //Getting codes from API
//   let api = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
//   let result = await api.json();
//   let codes = result.supported_codes;
//   return codes;
// }
// ​
// async function fillOptions(){ //Function for filling select boxes
//   let codes = await getCodes();
//   let selectBoxes = document.getElementsByClassName("select");
//   for(let i=0; i< selectBoxes.length; i++){
//     for(let c in codes){ //Creatign an option element for each currency
//       let elm = document.createElement("option");
//       let text = document.createTextNode(`${codes[c][0]} - ${codes[c][1]}`); //The text should be the name of currency which is the second index, i.e. index[1]
//       elm.appendChild(text);
//       elm.setAttribute('value', codes[c][0]);
//       selectBoxes[i].appendChild(elm);
//     }
//   }
// }
// ​
// async function handleSubmit(event){
//   event.preventDefault();
//   let from = document.getElementById('from').value; //Getting input values
//   let to = document.getElementById('to').value;
//   let amount = document.getElementById('amount').value;
//   if(from == 0 || to==0 || isNaN(amount)){ //Checking if input is valid
//     badInput(); //If invalid, inform the user in the DOM
//     return false;
//   }
//   let [rate, total] = await getRate(from, to, amount); //Getting rate
//   appendToDom(to, from, amount, total); //Appending result to DOM
// }
// ​
// async function getRate(from, to, amount){
//   let api = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`);
//   let result = await api.json();
//   let rate = [result.conversion_rate, result.conversion_result]; //Returning an array of the rate and result for given amount
//   return rate;
// }
// ​
// function appendToDom(to, from, amount, total){ //Adding result to DOM
//   let text = `The value of ${amount} ${from} is ${total} ${to}`;
//   handleResult(text);
// }
// ​
// function badInput(){ //This will appear if the input isn't valid
//   let text = 'You must select currencies and a valid numeric amount to convert.';
//   handleResult(text);
// }
// ​
// function handleResult(result){ //This function handles appeding appropriate result to DOM, either rate or error
//   if(document.getElementById("result") != null){
//     document.getElementById("result").remove();
//   }
//   let elm = document.createElement("p");
//   elm.setAttribute("id", "result");
//   let text = document.createTextNode(result);
//   elm.appendChild(text);
//   document.body.appendChild(elm);
// }
