# inline-worker
[![Build Status](http://img.shields.io/travis/mohayonao/inline-worker.svg?style=flat-square)](https://travis-ci.org/mohayonao/inline-worker)
[![NPM Version](http://img.shields.io/npm/v/inline-worker.svg?style=flat-square)](https://www.npmjs.org/package/inline-worker)
[![Bower](http://img.shields.io/bower/v/inline-worker.svg?style=flat-square)](http://bower.io/search/?q=inline-worker)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> JavaScript utility to create a WebWorker from a function

## Installation

npm:

```
npm install inline-worker
```

bower:

```
bower install inline-worker
```

downloads:

- [inline-worker.js](https://raw.githubusercontent.com/mohayonao/inline-worker/master/build/inline-worker.js)
- [inline-worker.min.js](https://raw.githubusercontent.com/mohayonao/inline-worker/master/build/inline-worker.min.js)

## Usage

```js
var InlineWorker = require("inline-worker");

var self = {};

var worker = new InlineWorker(function() {
  self.onmessage = function(e) {
    postMessage(self.bark(e.data)); // (2) hello!!
  };

  // worker internal function
  self.bark = function(msg) {
    return msg + "!!";
  };
}, self);

worker.onmessage = function(e) {
  console.log(e.data + "!!"); // (3) hello!!!!
};

worker.postMessage("hello"); // (1)
```

What is `worker` instance?

```js
if (global.window === global) {
  assert(worker instanceof Worker); // in the borwser
} else {
  assert(worker instanceof InlineWorker); // in the node.js
}
```

You can test worker internal functions via `self`.

```js
assert(self.bark("bye") === "bye!!");
```

## License
MIT
