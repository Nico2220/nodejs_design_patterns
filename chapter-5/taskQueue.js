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

  runTask(task) {
    return new Promise((resolve, reject) => {
      const taskWrapper = () => {
        const taskPromise = task();
        taskPromise.then(resolve, reject);
        return taskPromise;
      };

      if (this.consurmerQueue.length !== 0) {
        // there is a sleeping consumer availble, use it to run our taks
        const consumer = this.consurmerQueue.shift();
        consumer(taskWrapper());
      } else {
        // all consumers are buzy, enqueue the task
        this.taskQueue.push(taskWrapper);
      }
    });
  }
}
