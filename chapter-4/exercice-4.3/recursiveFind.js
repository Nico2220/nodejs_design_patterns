import { count } from "console";
import fs from "fs";
import path from "path";

// let result = [];
// function recursiveFind(dir, keyword, cb) {
//   fs.readdir(dir, "utf8", (err, filePaths) => {
//     if (err) {
//       return cb(err);
//     }

//     let index = 0;
//     function iterator(index) {
//       if (index === filePaths.length) {
//         return cb(null, result);
//       }

//       const file = filePaths[index];

//       fs.readFile(path.join(dir, file), "utf8", (err, content) => {
//         if (err) {
//           return cb(err);
//         }

//         if (content.indexOf(keyword) > -1) {
//           result.push(file);
//         }

//         index++;
//         iterator(index);
//       });
//     }

//     iterator(0);
//   });
// }

// recursiveFind("./test", "batman", (err, data) => {
//   if (err) {
//     console.log("ooops");
//   } else {
//     console.log("data=", data);
//   }
// });

let result = [];
let totalCount = 0;
let currentCount = 0;
let firsEntry = true;
function recursiveFind(dir, keyword, cb) {
  fs.readdir(dir, "utf8", (err, filePaths) => {
    if (err && err.code == "ENOTDIR") {
      fs.readFile(dir, "utf8", (err, fileContent) => {
        if (err) {
          return cb(err);
        }

        if (fileContent.indexOf(keyword) > -1) {
          result.push(dir);
        }
        console.log(result);
      });
    } else {
      totalCount++;
      for (const file of filePaths) {
        currentCount++;
        recursiveFind(path.join(dir, file), keyword, cb);
      }
    }
  });
}

recursiveFind("./test", "batman", (err, data) => {
  if (err) {
    console.log("ooops", err);
  } else {
    console.log("data=", data);
  }
});
