import fs from "fs";
import path from "path";

let results = [];
let pending = 0;
function listNestedFiles(directory, cb) {
  fs.readdir(directory, "utf8", (err, files) => {
    if (err) {
      if (err.code !== "ENOTDIR") {
        cb(err);
      }
      results.push(directory);
      if (--pending === 0) {
        cb(null, results);
      }
    } else {
      pending = files.length;
      files.forEach((fileName) => {
        listNestedFiles(path.join(directory, fileName), cb);
      });
    }
  });
}

listNestedFiles("../web-spider-v2", (err, files) => {
  if (err) {
    console.log("Something wrong appened", err);
  }
  console.log("files", files);
});
