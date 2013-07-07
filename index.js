var levelFS = require('level-fs');
var levelUP = require('levelup');
var levelJS = require('level-js');
var bash = require('bashful');
var Term = require('./vendor/term');
var ready = require('domready');

var db = levelUP('db', { db: levelJS });
var fs = levelFS(db);

var sh = bash({
  env: {
    UID: 'foobar'
  },
  spawn: spawn,
  write: fs.createWriteStream.bind(fs),
  read: fs.createReadStream.bind(fs),
  exists: fs.exists.bind(fs)
});

var shell = sh.createStream();
window.shell = shell;

/**
 * Terminal.
 */

var term = new Term(80, 25);
term.on('pm', console.log.bind(console))
shell.pipe(term);
term.on('key', function (k) {
  var code = k.charCodeAt(0);
  if (code == '13') k = '\n';
  term.write(k);
  shell.write(k);
});

ready(function () {
  term.open();
  document.addEventListener('keydown', term.keyDown.bind(term));
  document.addEventListener('keypress', term.keyPress.bind(term));
});

function spawn (_cmd, args, opts) {
  if (!cmd[_cmd]) return;
  return cmd[_cmd](args, opts);
}

var cmd = {};

cmd.cat = function (args, opts) {
  //var path = opts.cwd + args[0];
  var path = args[0];
  return fs.createReadStream(path);
};
