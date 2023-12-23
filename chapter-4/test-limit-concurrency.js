function makeSampleTask(name) {
  return (cb) => {
    console.log(`${name} started`);
    setTimeout(() => {
      console.log(`${name} completed`);
      cb();
    }, Math.random() * 2000);
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

class TaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  push(task) {
    this.queue.push(task);
    process.nextTick(this.next.bind(this));
    return this;
  }

  next() {
    while (this.running < this.concurrency && this.queue.length) {
      const task = this.queue.shift();
      task((err) => {
        if (err) {
          console.log("Oups there is an errro", err);
        }
        this.running--;
        process.nextTick(this.next.bind(this));
      });

      this.running++;
    }
  }
}

const queue = new TaskQueue(2);
console.log(queue);

tasks.forEach((task) => queue.push(task));
