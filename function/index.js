;(function(window) {
  function curry(callback = function () {}) {
    return function curried(...args) {
      if (args.length >= callback.length) {
        return callback.apply(this, args);
      } else {
        return function (...args2) {
          return curried.apply(this, args.concat(args2));
        };
      }
    };
  }
  Function.prototype.curry = curry
  window.$curry = curry
})(window);
