//  Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (numOfChildern, partnername, geographiclocation, jobtitle) {
  let geolocation = `31.28959172734845 34.786763824199575`;
  let div = document.createElement("div");
  let text = document.createTextNode(
    `You will be a ${jobtitle} in ${geolocation}, and married to ${partnername} with ${numOfChildern} kids.`
  );
  div.appendChild(text);
  document.body.appendChild(div);
})(4, "Ofir", 31.28959172734845 - 34.786763824199575, "Developer");

