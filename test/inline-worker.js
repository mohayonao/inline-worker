"use strict";

const assert = require("assert");
const InlineWorker = require("../");

describe("InlineWorker", () => {
  describe("constructor(func: function, [ self: object ])", () => {
    it("works", (done) => {
      let worker = new InlineWorker(function(self) {
        self.onmessage = function(e) {
          assert(e.data === "hello");
          self.postMessage("good bye");
        };
      });

      worker.onmessage = (e) => {
        assert(e.data === "good bye");
        done();
      };

      worker.postMessage("hello");
    });
  });
});
