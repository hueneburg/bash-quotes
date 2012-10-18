# bash-quotes

### grab a random >1 quote from bash.org

## install

    $ npm install bash-quotes # as an app library
    $ sudo npm install bash-quotes -g # as a cli script

## examples:

```
josh@onix:~$ bashquote 
<+ChiMP> WHATS GAYER THAN ME AND STARTS WITH AN N!!?!? 
<@miz> nothing 
<@miz> :o
josh@onix:~$
```

```js
#!/usr/bin/env node

var quote = require('./index');

quote(function (err, quote) {
  if (err) {
    throw err;
  }
  console.log(quote);
});
```

## license:

MIT/X11.
