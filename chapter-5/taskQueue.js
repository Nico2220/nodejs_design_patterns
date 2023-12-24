export class TaskQueuePC {
  constructor(concurrency) {
    this.taskQueue = [];
    this.consurmerQueue = [];
    // spawn consumers
    for (let i = 0; i < concurrency; i++) {
      this.consurmer();
    }
  }

  async consurmer() {
    while (true) {
      try {
        const task = await this.getNextTask();
        await task();
      } catch (err) {
        console.error(err);
      }
    }
  }

  getNextTask() {
    return new Promise((resolve) => {
      if (this.taskQueue.length !== 0) {
        return resolve(this.taskQueue.shift());
      }
      this.consurmerQueue.push(resolve);
    });
  }
}
