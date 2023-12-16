import { EventEmitter } from "events";

function task1() {
  setTimeout(() => {
    console.log("task 1");
  }, 2000);
}

export class TaskQueue extends EventEmitter {
  constructor(concurrency) {
    super();
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  pushTask(task) {
    this.queue.push(task);
    process.nextTick(this.next.bind(this));
    return this;
  }

  next() {
    if (this.running === 0 && this.queue.length === 0) {
      this.emit("empty");
    }
    while (this.running < this.concurrency && this.queue.length) {
      const task = this.queue.shift();
      task((err) => {
        if (err) {
          this.emit("error", err);
        }
        this.running--;
        process.nextTick(this.next.bind(this));
      });
      this.running++;
    }
  }
}

const q = new TaskQueue(2);
q.pushTask(task1);
