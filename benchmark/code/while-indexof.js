'use strict';

module.exports = function diff(arr, arrays) {
  arrays = [].concat.apply([], [].slice.call(arguments, 1));

  var len = arr.length;
  var idx = -1;
  var result = [];

  while (++idx < len) {
    var ele = arr[idx];
    if (arrays.indexOf(ele) === -1) {
      result.push(ele);
    }
  }
  return result;
};
