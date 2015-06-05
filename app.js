#!/usr/bin/env node
var args = process.argv;
var options = [];
if (args.length > 0) {
    for (var i = 2; i < args.length; i++) {
        if (args[i].indexOf('b') != -1) {
            options.push('bash');
        }
        if (args[i].indexOf('g') != -1) {
            options.push('german-bash');
        }
        if (args[i].indexOf('i') != -1) {
            options.push('ibash');
        }
    }
}

var quote = require('./index');

quote(options, function (err, quote) {
  if (err) {
    throw err;
  }
  console.log(quote);
});
