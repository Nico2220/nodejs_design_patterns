import { PassThrough } from "stream";

let writtenBytes = 0;
const monitor = new PassThrough();

monitor.on("data", (chunk) => {
  writtenBytes += chunk.length;
});

monitor.on("finish", () => console.log(`${writtenBytes} bytes written`));
monitor.end();

export default monitor;
