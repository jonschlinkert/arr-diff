'use strict';

module.exports = function diff(arr, arrays) {
  arrays = [].concat.apply([], [].slice.call(arguments, 1));

  arrays.forEach(function(value) {
    var idx = arr.indexOf(value);
    while (idx !== -1) {
      arr.splice(idx, 1);
      idx = arr.indexOf(value);
    }
  });

  return arr;
};
