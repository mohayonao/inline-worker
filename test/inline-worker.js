"use strict";

const assert = require("assert");
const InlineWorker = require("../");

const worker = new InlineWorker(function(self) {
  self.onmessage = function(e) {
    assert(e.data === "hello");
    self.postMessage("good bye");
  };
});

worker.onmessage = (e) => {
  assert(e.data === "good bye");
};

worker.postMessage("hello");
