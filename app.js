#!/usr/bin/env node

var quote = require('./index');

quote(function (err, quote) {
  if (err) {
    throw err;
  }
  console.log(quote);
});
