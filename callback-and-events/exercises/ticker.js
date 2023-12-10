import { EventEmitter } from "events";

// function ticker(number, cb) {
//   const emitter = new EventEmitter();
//   let count = 0;
//   let timerId;
//   const start = Date.now();

//   timerId = setInterval(() => {
//     const newDate = Date.now();
//     const diff = newDate - start;

//     if (diff >= number) {
//       clearInterval(timerId);
//       return cb(null, count);
//     }

//     e ;
//   }, 50);

//   return emitter;
// }

// ticker(1200, (err, data) => {
//   if (err) {
//     console.error("Errorrrr", err);
//   }
//   console.log("data", data);
// }).on("tick", (diff) => console.log("diff=", diff));

function ticker(number, callback) {
  const emitter = new EventEmitter();
  let count = 0;
  const TICK_INTERVAL = 50;

  let start = Date.now();
  setTimeout(function recursiveTimeout() {
    const diff = Date.now() - start;
    if (diff >= number) {
      return callback(null, count);
    }
    emitter.emit("tick", count);
    count++;
    setTimeout(recursiveTimeout, TICK_INTERVAL);
  }, TICK_INTERVAL);

  return emitter;
}

ticker(1200, (err, count) => {
  if (err) {
    return;
  }
  console.log("final count:", count);
}).on("tick", (count) => console.log("count=", count));

// function ticker(timer, callback) {
//   const eventEmitter = new EventEmitter();
//   let tick = 0;
//   const TICK_INTERVAL = 50;

//   const tickStart = new Date();

//   const emitTick = () => {
//     emitter.emit("tick", tick);
//     tick++;
//   };

//   setTimeout(function recursiveTimeout() {
//     // if timer has passed, terminate and return result
//     if (new Date() - tickStart >= timer) {
//       return callback(null, tick);
//     }

//     emitTick();

//     // call recursively for next emit
//     setTimeout(recursiveTimeout, TICK_INTERVAL);
//   }, TICK_INTERVAL);

//   return eventEmitter;
// }

// // 2 initialize ticker event emitter
// const emitter = ticker(1200, (err, tick) => {
//   if (err) {
//     return console.log("Callback error", err);
//   }
//   console.log(`Totally ticked ${tick} times`);
// });

// // 3 add listeners
// emitter
//   .on("error", (err) => console.log("Emitted error", err))
//   .on("tick", (result) => console.log("Tick #", result));
