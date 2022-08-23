import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

const accessToken = jwt.sign(
  { userid: 123, email: "bhavesh@gmail.com" },
  "Bhavesh123456",
  { expiresIn: "20s" }
);

console.log(accessToken);

// const someToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const id = setInterval(() => {
  jwt.verify(accessToken, "Bhavesh123456", (err, decoded) => {
    if (err) {
      console.log("not authorized");
      clearInterval(id);
      return;
    }
    // console.log("decoded=>", decoded);
    // const id = decoded.userid;
    // const e = decoded.email;
    // console.log(e, id);
    console.log("authorized hoooo!!!");
  });
}, 5 * 1000);
