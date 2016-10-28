"use strict";

require("run-with-mocha");

const assert = require("assert");
const actions = require("../src/actions");

describe("actions", () => {
  it("noteOn should create NOTE_ON action", () => {
    assert.deepEqual(actions.noteOn(69), { type: "NOTE_ON", noteNumber: 69 });
  });

  it("noteOff should create NOTE_OFF action", () => {
    assert.deepEqual(actions.noteOff(69), { type: "NOTE_OFF", noteNumber: 69 });
  });

  it("changeKeyOffset should create CHANGE_KEY_OFFSET action", () => {
    assert.deepEqual(actions.changeKeyOffset(60), { type: "CHANGE_KEY_OFFSET", offset: 60 });
  });
});
