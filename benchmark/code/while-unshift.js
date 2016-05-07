'use strict';

module.exports = function diff(arr, arrays) {
  arrays = [].concat.apply([], [].slice.call(arguments, 1));

  var len = arr.length;
  var result = [];

  while (len--) {
    if (arrays.indexOf(arr[len]) === -1) {
      result.unshift(arr[len]);
    }
  }
  return result;
};
