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

// module.exports = function difference(a, b) {
//   var alen = a.length;
//   var blen = b.length;

//   if (alen === 0) {
//     return [];
//   }
//   if (blen === 0) {
//     return a;
//   }

//   var c = [];

//   for (var i = 0; i < alen; i++) {
//     if (b.indexOf(a[i]) === -1) {
//       c.push(a[i]);
//     }
//   }

//   return c;
// };


module.exports = function difference(a, b) {
  if (a.length === 0) {
    return [];
  }

  if (b.length === 0) {
    return a;
  }

  b.forEach(function(value) {
    while (a.indexOf(value) !== -1) {
      a.splice(a.indexOf(value), 1);
    }
  });
  return a;
}

// module.exports = function difference(a, b) {
//   if (a.length === 0) {
//     return [];
//   }

//   if (b.length === 0) {
//     return a;
//   }

//   return a.reduce(function(acc, value, i) {
//     if (b.indexOf(value) === -1) {
//       acc.push(value);
//     }
//     return acc;
//   }, []);
// }

// module.exports = function difference(a, b) {
//   if (a.length === 0) {
//     return [];
//   }

//   if (b.length === 0) {
//     return a;
//   }

//   return a.filter(function (value) {
//     return b.indexOf(value) === -1;
//   });
// }


// module.exports = function diff(arr, omit) {
//   omit.forEach(function(value) {
//     while (arr.indexOf(value) !== -1) {
//       arr.splice(arr.indexOf(value), 1);
//     }
//   });
//   return arr;
// }