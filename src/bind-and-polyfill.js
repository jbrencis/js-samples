/*========================bind()======================================
===================================================================*/

//The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

// or like this
var boundGetX = module.getX.bind(module);
console.log(boundGetX());

// polyfill

Function.prototype.bind = function(thisArg, ...fixedArgs) {
  const func = this;
  return function(...args) {
    return func.apply(thisArg, [...fixedArgs, ...args]);
  };
};
