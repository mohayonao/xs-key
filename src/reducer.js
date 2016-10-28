"use strict";

const nmap = require("nmap");

const initState = { offset: 57, keys: nmap(17, () => 0) };

module.exports = (state = initState, action) => {
  switch (action.type) {
  case "NOTE_ON":
    return Object.assign({}, state, { keys: setNoteState(state.keys, action.noteNumber - state.offset, 1) });
  case "NOTE_OFF":
    return Object.assign({}, state, { keys: setNoteState(state.keys, action.noteNumber - state.offset, 0) });
  case "CHANGE_KEY_OFFSET":
    return Object.assign({}, state, { offset: action.offset });
  }
  return state;
};

function setNoteState(keys, index, state) {
  keys = keys.slice();
  keys[index] = state;
  return keys;
}
