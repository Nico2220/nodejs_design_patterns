async function myPromiseAll(promises) {
  let result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((value) => {
          console.log("in then");
          result.push(value);

          if (++count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          console.log("in catch", err);
          reject(err);
        });
    });
  });
}

const promisesArr = [Promise.reject(2), Promise.resolve(3), Promise.resolve(4)];
const r = await myPromiseAll(promisesArr);
console.log(r);
