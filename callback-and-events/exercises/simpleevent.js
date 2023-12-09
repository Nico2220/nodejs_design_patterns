import { EventEmitter } from "events";
import { readFile } from "fs";
class findRegex extends EventEmitter {
  constructor(regex) {
    super();
    this.regex = regex;
    this.files = [];
  }

  addFile(file) {
    this.files.push(file);
    return this;
  }

  find() {
    process.nextTick(() => this.emit("findstart", this.files));
    for (const file of this.files) {
      readFile(file, "utf8", (err, content) => {
        if (err) {
          return this.emit("error", err);
        }
        this.emit("fileread", file);
        const match = content.match(this.regex);
        if (match) {
          match.forEach((elem) => this.emit("found", file, elem));
        }
      });
    }

    return this;
  }
}

const findRegexInstance = new findRegex(/hello \w+/);

findRegexInstance
  .addFile("exemple.txt")
  .addFile("test.json")
  .find()
  .on("error", (err) => console.error("There is an Error", err.message))
  .on("findstart", (files) => console.log(JSON.stringify(files)));
