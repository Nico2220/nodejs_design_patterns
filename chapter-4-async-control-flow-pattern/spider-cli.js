import { spider } from "./spider.js";

spider(process.argv[2], (err, filename, downloaded) => {
  console.log("process.argv[2]=", process.argv[2]);
  if (err) {
    console.error("There is an ERROR", err);
  } else if (downloaded) {
    console.log(`completed the download of ${filename}`);
  } else {
    console.log(`"${filename}" was already downloaded`);
  }
});
