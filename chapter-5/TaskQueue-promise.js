function makeSampleTask(name) {
  return function () {
    return new Promise((resolve, reject) => {
      console.log(`${name} started`);
      setTimeout(() => {
        console.log(`${name} completed`);
      }, 2000);
    });
  };
}

const tasks = [
  makeSampleTask("Task 1"),
  makeSampleTask("Task 2"),
  makeSampleTask("Task 3"),
  makeSampleTask("Task 4"),
  makeSampleTask("Task 5"),
  makeSampleTask("Task 6"),
  makeSampleTask("Task 7"),
];

export class TaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  runTask(task) {
    return new Promise((resolve, reject) => {
      this.queue.push(() => {
        return task().then(resolve, reject);
      });
      process.nextTick(this.next.bind(this));
    });
  }

  next() {
    while (this.running < this.concurrency && this.queue.length) {
      const task = this.queue.shift();
      task().finally(() => {
        this.running--;
        this.next();
      });
      this.running++;
    }
  }
}

const queue = new TaskQueue(2);
tasks.forEach((el) => queue.runTask(el));
