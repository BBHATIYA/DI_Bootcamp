let fs = require("fs");

//1

fs.readFile("public/test.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

//2

fs.writeFile("public/test2.txt", "New text to test2 file", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.appendFile(
  "public/test2.txt",
  "Appending more text to test2 file",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

//3

fs.unlink("public/test2.txt", (err) => {
  if (err) {
    console.log(err);
  }
});
