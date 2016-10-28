"use strict";

const sounds = require("./sounds");

class Synthesizer {
  constructor(context, actions) {
    this.context = context;
    this.actions = actions;
    this._notes = {};
  }

  doAction(action) {
    switch (action.type) {
    case "NOTE_ON":
      this.noteOn(action.noteNumber);
      break;
    case "NOTE_OFF":
      this.noteOff(action.noteNumber);
      break;
    }
  }

  setState() {}

  noteOn(noteNumber) {
    this.noteOff(noteNumber);

    this._notes[noteNumber] = sounds.sine(this.context.destination, this.context.currentTime, {
      frequency: 440 * Math.pow(2, (noteNumber - 69) / 12),
    });
    this._notes[noteNumber].noteOn();
  }

  noteOff(noteNumber) {
    if (this._notes[noteNumber]) {
      this._notes[noteNumber].noteOff();
    }
    this._notes[noteNumber] = null;
  }
}

module.exports = Synthesizer;
