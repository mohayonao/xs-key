"use strict";

const nmap = require("nmap");

const initState = { offset: 57, keys: nmap(20, () => 0) };

module.exports = (state = initState, action) => {
  switch (action.type) {
  case "SET_NOTE_STATE": {
    const keys = JSON.parse(JSON.stringify(state.keys));
    keys[action.noteNumber - state.offset] = action.state;
    return Object.assign({}, state, { keys });
  }
  case "CHANGE_KEY_OFFSET":
    return Object.assign({}, state, { offset: action.offset });
  }
  return state;
};
