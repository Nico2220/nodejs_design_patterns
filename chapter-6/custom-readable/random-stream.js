import { Readable } from "stream";
import Chance from "chance";

const chance = new Chance();

export class RandomStream extends Readable {
  constructor(options) {
    super(options);
    this.emitttedBytes = 0;
  }

  _read(size) {
    const chunk = chance.string({ length: size });
    this.push(chunk, "utf8");
    this.emitttedBytes += chunk.length;

    if (chance.bool({ likelihood: 5 })) {
      this.push(null);
    }
  }
}
