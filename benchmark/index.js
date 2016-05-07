'use strict';

var opts = {alias: {fixtures: 'f', code: 'c'}};
var argv = require('minimist')(process.argv.slice(2), opts);
var path = require('path');
var Suite = require('benchmarked');

var suite = new Suite({
  fixtures: path.resolve(__dirname, 'fixtures', argv.f || '*.js'),
  code: path.resolve(__dirname, 'code', argv.c || '*.js'),
  cwd: __dirname
});

suite.run();
