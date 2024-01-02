import { createReadStream, access, readdir } from "fs";
import { basename, resolve, dirname } from "path";
import { pipeline } from "stream";
import { createUploadStream } from "./upload.js";

const filePath = process.argv[2];
const filename = basename(filePath);

console.log(filePath);

pipeline(createReadStream(filePath), createUploadStream(filename), (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("File upload");
});
