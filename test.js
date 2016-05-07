'use strict';

require('mocha');
var assert = require('assert');
var diff = require('./');

describe('diff', function() {
  it('should diff array:', function() {
    assert.deepEqual(diff(['a', 'b', 'c'], ['b', 'c', 'e']), ['a']);
    assert.deepEqual(diff(['x', 'b', 'c', 'e', 'y'], ['b', 'x', 'e']), ['c', 'y']);
    assert.deepEqual(diff(['x', 'x'], ['a', 'b', 'c']), ['x', 'x']);
    assert.deepEqual(diff(['x'], ['a', 'b', 'c']), ['x']);
  });

  it('should include duplicates:', function() {
    assert.deepEqual(diff(['x', 'b', 'b', 'b', 'c', 'e', 'y'], ['x', 'e']), ['b', 'b', 'b', 'c', 'y']);
  });

  it('should diff elements from multiple arrays:', function() {
    assert.deepEqual(diff(['a', 'b', 'c'], ['a'], ['b']), ['c']);
  });

  it('should return an empty array if no unique elements are in the first array:', function() {
    assert.deepEqual(diff(['a'], ['a', 'b', 'c']), []);
  });

  it('should return the first array if the second array is empty:', function() {
    assert.deepEqual(diff(['a', 'b', 'c'], []), ['a', 'b', 'c']);
  });

  it('should return the first array if no other args are passed:', function() {
    assert.deepEqual(diff(['a', 'b', 'c']), ['a', 'b', 'c']);
  });

  it('should iterate over sparse arguments:', function() {
    assert.deepEqual(diff(['a', 'b', 'c'], null, ['a', 'b']), ['c']);
  });
});
