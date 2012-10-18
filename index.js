var request = require('request'),
    cheerio = require('cheerio');

var REQUEST_URL = 'http://bash.org/?random1';


module.exports = function (cb) {
  request(REQUEST_URL, function (err, res, body) {
    if (err) {
      return cb(err);
    }
    if (res.statusCode !== 200) {
      return cb(new Error('HTTP Status Code ' + res.statusCode));
    }

    var $ = cheerio.load(body);

    var quotes = [];

    $('.qt').each(function () {
      quotes.push($(this).text());
    });

    cb(null, quotes[Math.floor(quotes.length * Math.random())]);

  });
};
