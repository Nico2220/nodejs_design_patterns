import { RandomStream } from "./random-stream.js";

const randomStream = new RandomStream();

randomStream
  .on("data", (chunk) => {
    console.log(`Chunk received (${chunk.length} bytes) : ${chunk.toString()}`);
  })
  .on("end", () => {
    console.log(`Produced ${randomStream.emitttedBytes} bytes of random data`);
  });
