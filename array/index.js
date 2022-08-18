Array.prototype.insert = function (index, ...items) {
  this.splice(index, 0, ...items);
};