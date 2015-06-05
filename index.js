var request = require('request'),
    cheerio = require('cheerio');


var REQUEST_URL = '';
var CLASS = '';
var processQuote = {};



module.exports = function (options, cb) {
    if (typeof options == "function") {
        cb = options;
        options = [0];
    }
    switch (options[Math.floor(options.length*Math.random())]) {
        case 'bash':
            REQUEST_URL = 'http://bash.org/?random1';
            CLASS = '.qt';
            processQuote = function(quote) { return quote.text().trim() };
            break;

        case 'german-bash':
            REQUEST_URL = 'http://german-bash.org/action/random';
            CLASS = '.zitat';
            processQuote = function (quote) {
                return quote.find('.quote_zeile').text().trim();
            };
            break;

        case 'ibash':
            REQUEST_URL = 'http://ibash.de/random.html';
            CLASS = '.quote';
            processQuote = function(quote, $) {
                var q = '';
                quote.find('.showcomment').remove();
                quote.find('tr').each(function() {
                    q += $(this).text() + '\n';
                });
                return q.trim();
            };
            break;
    }
  request(REQUEST_URL, function (err, res, body) {
    if (err) {
      return cb(err);
    }
    if (res.statusCode !== 200) {
      return cb(new Error('HTTP Status Code ' + res.statusCode));
    }

    var $ = cheerio.load(body);

    var quotes = [];

    $(CLASS).each(function () {
        var q = processQuote($(this), $);
        if (q.length > 0)
            quotes.push(q);
    });

    cb(null, quotes[Math.floor(quotes.length * Math.random())]);

  });
};
