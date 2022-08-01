async function page() {
  let home = document.getElementById("home");
  let data = await fetch("http://localhost:3000/");
  let parsedData = await data.json();
  console.log(parsedData);
  let string = JSON.stringify(parsedData);
  home.append(string);
}

page();
