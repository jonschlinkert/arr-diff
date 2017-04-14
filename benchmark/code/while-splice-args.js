'use strict';

module.exports = function(arr, arrays) {
  for (var i = 1; i < arguments.length; i++) {
    diff(arr, arguments[i]);
  }
  return arr;
};

function diff(one, two) {
  if (!Array.isArray(two)) return;
  var len = two.length;
  var idx = -1;
  while (++idx < len) {
    remove(one, two[idx]);
  }
}

function remove(arr, ele) {
  var idx = arr.indexOf(ele);
  if (idx === -1) return;
  var item = arr.pop();
  if (item !== ele) {
    arr[idx] = item;
  }
  return remove(arr, ele);
}
