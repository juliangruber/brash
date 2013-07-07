#!/usr/bin/env node

var http = require('http');
var browserify = require('browserify');
var fs = require('fs');
var optimist = require('optimist');

var argv = optimist
  .usage('Browser-only terminal.\nUsage: $0 [OPTIONS]')
  .describe('port', 'Port to listen on')
  .alias('port', 'p')
  .default('port', 3000)
  .describe('help', 'Print usage instructions')
  .alias('help', 'h')
  .describe('debug', 'Debug output')
  .alias('d', 'debug')
  .argv;

if (argv.help) return optimist.showHelp();

http.createServer(function (req, res) {
  if (/^\/bundle\.js/.test(req.url)) {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    var b = browserify(__dirname + '/../');
    b.bundle({ debug: argv.debug }).pipe(res);
  } else {
    res.end('<script src="/bundle.js"></script>');
  }
}).listen(argv.port, function () {
  console.log('Open up http://localhost:%s/', argv.port);
});
