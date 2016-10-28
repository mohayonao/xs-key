"use strict";

require("run-with-mocha");

const assert = require("assert");
const reducer = require("../src/reducer");

const initState = (opts) => {
  return Object.assign({
    offset: 57,
    keys: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  }, opts);
};

describe("reducer", () => {
  it("should handle initial state", () => {
    const actual = reducer(undefined, {});
    const expected = initState();

    assert.deepEqual(actual, expected);
  });

  it("should handle SET_NOTE_STATE", () => {
    const actual = reducer(initState(), { type: "SET_NOTE_STATE", noteNumber: 60, state: 1 });
    const expected = initState({ keys: [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] });

    assert.deepEqual(actual, expected);
  });

  it("should handle CHANGE_KEY_OFFSET", () => {
    const actual = reducer(initState(), { type: "CHANGE_KEY_OFFSET", offset: 60 });
    const expected = initState({ offset: 60 });

    assert.deepEqual(actual, expected);
  });
});
