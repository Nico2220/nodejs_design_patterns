import { Readable } from "stream";
import Chance from "chance";

const chance = new Chance();
let emmitedBytes = 0;

const randomStream = new Readable({
  read(size) {
    const chunk = chance.string({ length: size });
    this.push(chunk, "utf8");
    emmitedBytes += chunk.length;
    if (chance.bool({ likelihood: 5 })) {
      this.push(null);
    }
  },
});

randomStream
  .on("data", (chunk) => {
    console.log(`Chunk received (${chunk.length} bytes) : ${chunk.toString()}`);
  })
  .on("end", () => {
    console.log(`Produced ${emmitedBytes} bytes of random data`);
  });
