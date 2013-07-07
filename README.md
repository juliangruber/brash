
# brash

Browser-only terminal. Uses
[level-fs](https://github.com/juliangruber/level-fs) on top of
[level-js](https://github.com/maxogden/level.js) for the filesystem.

**WIP**

## implemented

* `fake in-/output: use shell.write('my command\n') in the console.`
* `builtin: cat`

## not yet implemented

* `terminal rendering`
* `builtin: ls`

## Usage

```bash
$ brash
```

Then open up [http://localhost:3000/](http://localhost:3000/).

## API

```bash
$ brash --help
Browser-only terminal.
Usage: brash [OPTIONS]

Options:
  --port, -p  Port to listen on         [default: 3000]
  --help, -h  Print usage instructions

```

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install -g brash
```

## License

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
