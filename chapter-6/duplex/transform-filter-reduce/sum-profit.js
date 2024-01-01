import { Transform } from "stream";

export class SumProfit extends Transform {
  constructor(options = {}) {
    options.objectMode = true;
    super(options);
    this.total = 0;
  }

  _transform(record, enc, cb) {
    // record.profit
    this.total += Number.parseFloat(record[2]);
    cb();
  }

  _flush(cb) {
    this.push(this.total.toString());
    cb();
  }
}
