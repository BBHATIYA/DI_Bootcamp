const fs = require("fs");

// let info = "bla bla bla";

let info = {
  name: "Bhavesh",
  lname: "Bhatiya",
};

fs.writeFile("info.txt", JSON.stringify(info), (err) => {
  if (err) {
    console.log(err);
  }
});

// fs.appendFile('info.txt', '123333', err =>{
//     if(err){
//         console.log(err);
//     }
// })

// const data = fs.readFile("info.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// try {
//   const info = fs.readFileSync("info.txt", "utf-8");
//   console.log(info);
// } catch (e) {
//   console.log(e);
// }
