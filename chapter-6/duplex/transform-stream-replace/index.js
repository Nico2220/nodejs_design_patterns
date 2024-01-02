import { ReplaceStream } from "./replace-stream.js";

const replaceStream = new ReplaceStream("world", "node.js");
replaceStream.on("data", (chunk) => console.log(chunk.toString()));

replaceStream.write("Hello W");
replaceStream.write("orld!");
replaceStream.end();
