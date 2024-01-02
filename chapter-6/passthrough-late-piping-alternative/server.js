import { createServer } from "http";
import { basename, join } from "path";
import { createWriteStream } from "fs";

const server = createServer((req, res) => {
  const filename = basename(req.headers["x-filename"]);
  const destFilename = join("receive_files", filename);
  console.log("file request receive :", filename);

  req.pipe(new createWriteStream(destFilename)).on("finish", () => {
    res.writeHead(201, { "Content-Type": "text/plain" });
    res.end("OK\n");
    console.log(`File saved ${destFilename}`);
  });
});

server.listen(3000, () => console.log("Listening on http://localhost:3000"));
