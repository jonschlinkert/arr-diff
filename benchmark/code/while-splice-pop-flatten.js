'use strict';

var flatten = require('arr-flatten');

module.exports = function diff(arr, arrays) {
  arrays = flatten([].slice.call(arguments, 1));
  var len = arrays.length;
  for (var i = 0; i < len; i++) {
    remove(arr, arrays[i]);
  }
  return arr;
};

function remove(arr, ele) {
  var idx = arr.indexOf(ele);
  while (idx !== -1) {
    var val = arr.pop();
    if (ele !== val) {
      arr[idx] = val;
    }
    idx = arr.indexOf(ele);
  }
}
