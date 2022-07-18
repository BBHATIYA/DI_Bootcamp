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
