#!/usr/bin/env node
var fs = require('fs');
var dommod = require('./index.js');

var filename = process.argv[process.argv.length-1];

fs.readFile(filename, function(err, contents) {
  if(err) return console.error("Cannot load file: " + filename);

  console.log(dommod(contents, process.argv[process.argv.length-2]));
});
