/*!
 * arr-diff <https://github.com/jonschlinkert/arr-diff>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

/**
 * Return the difference between two arrays.
 *
 * ```js
 * var a = ['a', 'b', 'c', 'd'];
 * var b = ['b', 'c'];
 *
 * console.log(difference(a, b))
 * //=> ['a', 'd']
 * ```
 *
 * @param  {Array} `a`
 * @param  {Array} `b`
 * @return {Array}
 */

module.exports = function diff(a, b) {
  var alen = a.length - 1;
  var blen = b.length;

  if (alen === 0) {
    return [];
  }
  if (blen === 0) {
    return a;
  }

  var len = a.length;
  var arr = [];

  while (len--) {
    if (b.indexOf(a[len]) === -1) {
      arr.push(a[len]);
    }
  }
  return arr;
};
