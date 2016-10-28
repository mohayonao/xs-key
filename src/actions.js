"use strict";

module.exports = {
  noteOn(noteNumber) {
    return { type: "NOTE_ON", noteNumber };
  },
  noteOff(noteNumber) {
    return { type: "NOTE_OFF", noteNumber };
  },
  setNoteState(noteNumber, state) {
    return { type: "SET_NOTE_STATE", noteNumber, state };
  },
  changeKeyOffset(offset) {
    return { type: "CHANGE_KEY_OFFSET", offset };
  }
};
