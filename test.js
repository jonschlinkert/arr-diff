/*!
 * arr-diff <https://github.com/jonschlinkert/arr-diff>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var diff = require('./');

describe('diff', function () {
  it('should diff array:', function () {
    diff(['a', 'b', 'c'], ['b', 'c', 'e']).should.eql(['a']);
  });
});