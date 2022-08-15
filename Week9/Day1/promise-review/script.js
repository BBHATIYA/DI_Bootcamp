// const p = new Promise((resolve, reject) => {
//   //   setTimeout(() => {
//   if (true) {
//     resolve("Hi");
//   } else {
//     reject("bye");
//   }
//   //   }, 5000);
// });
// // console.log(p);

// p
// .then((ret) => console.log(p))
// .catch((e) => console.log(e));

// async and await

async function getData() {
  return "hi";
}
getData().then((ret) => console.log(ret));
