document.forms.form.addEventListener("submit", requestData);

function requestData(ev) {
  ev.preventDefault();
  let search = ev.target.elements.search.value;
  // console.log(search);
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  );
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = function () {
    if (search.length == 0) {
      return false;
    }
    let imageUrl =
      xhr.response.data[Math.floor(Math.random() * 51)].images.original.url;

    let formOfImage = document.createElement("form");
    formOfImage.classList.add("formOfImage");
    // console.log(formOfImage);
    let image = document.createElement("img");
    image.setAttribute("src", imageUrl);
    let buttonDelete = document.createElement("button");
    let buttonText = document.createTextNode("Delete");
    buttonDelete.setAttribute("type", "Submit");
    // let deleteAllButton = document.createElement("button");
    buttonDelete.appendChild(buttonText);
    formOfImage.appendChild(image);
    formOfImage.appendChild(buttonDelete);
    document.body.appendChild(formOfImage);

    let imageArray = Array.from(document.getElementsByClassName("formOfImage"));
    imageArray.forEach((elem) => elem.addEventListener("submit", deleteImage));
    function deleteImage(ev) {
      ev.preventDefault();
      ev.target.remove();
    }

    let deleteAllButton = document.getElementById("deleteall");
    // console.log(deleteAllButton);
    deleteAllButton.addEventListener("click", deleteAllGif);

    function deleteAllGif() {
      let gifForms = document.getElementsByClassName("formOfImage");
      let newArray = Array.from(gifForms);
      console.log(gifForms);
      newArray.forEach((element) => (element.style.display = "none"));
    }
  };
}

// Lise way

// (function setEvents() {
//   const form = document.getElementById("formgif");
//   form.addEventListener("submit", retrieveInput);

//   const btnDeleteAll = document.getElementById("delAll");
//   btnDeleteAll.addEventListener("click", deleteAllGifs);
// })();

// const xhrobj = new XMLHttpRequest();

// // event listeners for the XMLHttpRequest object
// xhrobj.addEventListener("load", loadData);
// xhrobj.addEventListener("progress", inProgress);
// xhrobj.addEventListener("error", errorNetwork);

// const container = document.getElementById("container");

// function retrieveInput(event) {
//   event.preventDefault();
//   const inputvalue = document.getElementById("cat").value;
//   requestData(inputvalue);
// }

// // create the request
// function requestData(value) {
//   xhrobj.open(
//     "GET",
//     `https://api.giphy.com/v1/gifs/random?tag=${value}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
//   );
//   xhrobj.responseType = "json";
//   xhrobj.send();
// }

// function loadData() {
//   if (xhrobj.status !== 200) {
//     console.log("error");
//   } else {
//     appendData(xhrobj.response);
//   }
// }

// function appendData(gif) {
//   const containerImg = document.createElement("div");
//   const imggif = document.createElement("img");
//   imggif.style.width = "30%";
//   const btnDeleteGif = document.createElement("button");
//   const text = document.createTextNode("Delete the gif");
//   btnDeleteGif.appendChild(text);
//   btnDeleteGif.addEventListener("click", deleteGif);

//   // obj destructuring
//   const {
//     data: {
//       images: {
//         original: { url },
//       },
//     },
//   } = gif;

//   imggif.setAttribute("src", url);
//   containerImg.appendChild(imggif);
//   containerImg.appendChild(btnDeleteGif);
//   container.appendChild(containerImg);
// }

// // when the server is processing - meaning looking for the data
// function inProgress() {
//   console.log("processing");
// }

// // when the request couldn't be made because of network error
// function errorNetwork() {
//   console.log("error");
// }

// // delete one gif
// function deleteGif(event) {
//   const divImage = event.target.parentElement;
//   divImage.remove();
// }

// // delete all gifs
// function deleteAllGifs() {
//   while (container.hasChildNodes()) {
//     container.removeChild(container.lastChild);
//   }
//   //OR
//   // container.textContent = ""
// }
