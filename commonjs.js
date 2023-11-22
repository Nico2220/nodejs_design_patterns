/**
 * self invoked function. uses "return statement to expose part of the code"
 */
const myModule = (() => {
  const privateFoo = () => {};
  const privateBar = [];
  const exported = {
    publicFoo: () => {},
    publicBar: () => {},
  };
  return exported;
})();

console.log(myModule);
console.log(myModule.publicFoo);
