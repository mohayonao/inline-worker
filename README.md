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

- `constructor(func: function, [ self: object ]): Worker`

## Example

```js
const InlineWorker = require("inline-worker");

let worker = new InlineWorker(function(self) {
  self.onmessage = function(e) {
    console.log(e.data);
    self.postMessage("good bye");
  };
});

worker.onmessage = (e) => {
  console.log(e.data);
};

worker.postMessage("hello");
// → "hello"
// → "good bye"
```

## License
MIT
