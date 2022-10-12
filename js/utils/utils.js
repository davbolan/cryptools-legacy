Array.prototype.on = function (event, func) {
  let i = 0;
  const len = this.length;
  while (i < len) {
    this[i++].on(event, func);
  }
};

Array.prototype.uniq = function () {
  return [...new Set(this)];
};

Array.prototype.deleteEmptyValues = function () {
  return this.filter(Boolean);
};

String.prototype.delete = function (word) {
  return this.replace(word, '');
};

String.prototype.deleteAll = function (word) {
  return this.replaceAll(word, '');
};

String.prototype.escapeSpecialChars = function () {
  return this.replace(/\\n/g, '\\n')
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, '\\&')
    .replace(/\\r/g, '\\r')
    .replace(/\\t/g, '\\t')
    .replace(/\\b/g, '\\b')
    .replace(/\\f/g, '\\f');
};
