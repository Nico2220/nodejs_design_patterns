/**
 * Revealong function,self invoked function. uses "return statement to expose part of the code"
 */
// const myModule = (() => {
//   const privateFoo = () => {};
//   const privateBar = [];
//   const exported = {
//     publicFoo: () => {},
//     publicBar: () => {},
//   };
//   return exported;
// })();

// console.log(myModule);
// console.log(myModule.publicFoo);

const originalRequire = require;

const fs = originalRequire("fs");

function loadModule(filename, module, require) {
  const wrappedSrc = `(function (module, exports, require) {
      ${fs.readFileSync(filename, "utf8")}
    })(module, module.exports, require)`;
  eval(wrappedSrc);
}

require = function require(moduleName) {
  console.log(`Require invoked for module: ${moduleName}`);
  const id = require.resolve(moduleName); // ①
  console.log("hrllow");
  if (require.cache[id]) {
    //
    return require.cache[id].exports;
  }

  // module metadata
  const module = {
    // ③
    exports: {},
    id,
  };
  // Update the cache
  require.cache[id] = module; // ④

  // load the module
  loadModule(id, module, require); // ⑤

  // return exported variables
  return module.exports; // ⑥
};

require.cache = {};
require.resolve = (moduleName) => {
  // reuse the original resolving algorithm for simplicity
  return originalRequire.resolve(moduleName);
};

// Load the entry point using our homemade 'require'
require(process.argv[2]);
