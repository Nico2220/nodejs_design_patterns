export function promisify(callbakcBaseApi) {
  return function promistified(...args) {
    return new Promise((resolve, reject) => {
      const newArgs = [
        ...args,
        function (err, result) {
          if (err) {
            return reject(err);
          }
          resolve(result);
        },
      ];

      callbakcBaseApi(...newArgs);
    });
  };
}
