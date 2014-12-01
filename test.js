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
    diff(['foo', 'b', 'c', 'e', 'bar'], ['b', 'foo', 'e']).should.eql(['bar', 'c']);
    diff(['foo', 'foo'], ['a', 'b', 'c']).should.eql(['foo', 'foo']);
    diff(['foo'], ['a', 'b', 'c']).should.eql([]);
  });

  it('should return an empty array if no unique elements are in the first array:', function () {
    diff(['foo'], ['a', 'b', 'c', 'foo']).should.eql([]);
  });
});
