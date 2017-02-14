const repl = require('repl');

const replServer = repl.start({
  prompt: 'Hotel App > '
});

const Hotel = require('./hotel');

replServer.context.Hotel = Hotel;
