Array.prototype.on = function (event, func) {
  for (let i = 0; i < this.length; i++) {
    this[i].on(event, func);
  }
};
