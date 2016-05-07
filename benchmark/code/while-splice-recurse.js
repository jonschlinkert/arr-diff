'use strict';

module.exports = function diff(arr, arrays) {
  arrays = [].concat.apply([], [].slice.call(arguments, 1));
  var len = arrays.length;
  for (var i = 0; i < len; i++) {
    remove(arr, arrays[i]);
  }
  return arr;
};

function remove(arr, ele) {
  var idx = arr.indexOf(ele);
  if (idx === -1) {
    return;
  }
  var val = arr.pop();
  if (val === ele) {
    return;
  }
  arr[idx] = val;
  return remove(arr, ele);
}
