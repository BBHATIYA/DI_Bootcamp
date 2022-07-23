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
      //   console.log(result);

      let res = result[to] * number;

      document.querySelector(".res").innerText = res;
    } catch (err) {
      console.log(err);
    }
  }
});
