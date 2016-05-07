'use strict';

module.exports = function diff(arr, arrays) {
  arrays = [].concat.apply([], [].slice.call(arguments, 1));

  var len = arr.length - 1;
  var result = [];

  for (var i = len; i >= 0; i--) {
    var ele = arr[i];
    if (arrays.indexOf(ele) === -1) {
      result.push(ele);
    }
  }
  return result;
};
