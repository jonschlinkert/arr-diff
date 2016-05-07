'use strict';

module.exports = function diff(a, b, c) {
  var len = a.length;
  var arr = [];
  var rest;

  if (!b) {
    return a;
  }

  if (!c) {
    rest = b;
  } else {
    rest = [].concat.apply([], [].slice.call(arguments, 1));
  }

  while (len--) {
    var ele = arr[len];
    if (rest.indexOf(ele) === -1) {
      arr.unshift(ele);
    }
  }
  return arr;
};
