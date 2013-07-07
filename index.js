var levelFS = require('level-fs');
var levelUP = require('levelup');
var levelJS = require('level-js');
var term = require('./vendor/term');
var bash = require('bashful');

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
shell.on('data', console.log.bind(console));
window.shell = shell;

function spawn (_cmd, args, opts) {
  if (!cmd[_cmd]) return;
  return cmd[_cmd](args, opts);
}

var cmd = {};

cmd.cat = function (args, opts) {
  var path = opts.cwd + args[0];
  return fs.createReadStream(path);
};
