'use strict';

module.exports = function diff(arr, arrays) {
  arrays = [].concat.apply([], [].slice.call(arguments, 1));

  return arr.reduce(function(acc, ele, i) {
    if (arrays.indexOf(ele) === -1) {
      acc.push(ele);
    }
    return acc;
  }, []);
};
