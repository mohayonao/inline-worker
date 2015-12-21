# inline-worker
[![Build Status](http://img.shields.io/travis/mohayonao/inline-worker.svg?style=flat-square)](https://travis-ci.org/mohayonao/inline-worker)
[![NPM Version](http://img.shields.io/npm/v/inline-worker.svg?style=flat-square)](https://www.npmjs.org/package/inline-worker)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> JavaScript utility to create a universal WebWorker from a function

## Installation

```
$ npm install inline-worker
```

## API
### InlineWorker

- `constructor(func: function, [ self: object ]): Worker | InlineWorker`

## Example

```js
const InlineWorker = require("inline-worker");

let self = {};
let worker = new InlineWorker(function(self) {
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
