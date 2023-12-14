import fs from "fs";
function concatFiles([...files], dest, cb) {
  let index = 0;
  let text = "";
  function iterate(index) {
    if (index === files.length) {
      return cb(null, true);
    }

    const filename = files[index];

    // read and write file sequentially
    fs.readFile(filename, "utf8", (err, fileContent) => {
      if (err) {
        return cb(err);
      }

      text += fileContent;
      fs.writeFile(dest, text, (err) => {
        console.log(filename, fileContent);
        if (err) {
          return cb(err);
        }
        index++;
        iterate(index);
      });
    });
  }
  iterate(0);
}

function concatFilesv2([...files], dest, cb) {
  const text = [];
  // read all the files concurrenly and register them
  files.forEach((filename, index) => {
    fs.readFile(filename, "utf8", (err, fileContent) => {
      if (err) {
        cb(err);
      }
      text[index] = fileContent;

      // once all the are read, write there content in a single file
      if (text.length === files.length) {
        fs.writeFile(dest, text.join(""), (err) => {
          if (err) {
            return cb(err);
          }
          console.log("concatanation is completed");
        });
      }
    });
  });
}

concatFilesv2(["foo.txt", "bar.txt", "baz.txt"], "dest.txt", (err) => {
  if (err) {
    console.log("something wrong appened", err);
  }
});
