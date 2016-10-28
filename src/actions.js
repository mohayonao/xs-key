"use strict";

module.exports = {
  noteOn(noteNumber) {
    return { type: "NOTE_ON", noteNumber };
  },
  noteOff(noteNumber) {
    return { type: "NOTE_OFF", noteNumber };
  },
  changeKeyOffset(offset) {
    return { type: "CHANGE_KEY_OFFSET", offset };
  }
};
