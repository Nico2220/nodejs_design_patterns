// import { randomBytes } from "crypto";
// import { promistify } from "./promisify.js";
// import fs from "fs";

// const randomBytesP = promistify(randomBytes);
// randomBytesP(32).then((buffer) => console.log(buffer.toString()));

// console.log(
//   fs.stat(".", (err, value) => {
//     if (err) {
//       console.log("Errorrr", err);
//     }
//     console.log(value);
//   })
// );

const v = Promise.resolve(new Error("ops"));
v.then((res) => {
  console.log("r=", res);
});

console.log("hello");
