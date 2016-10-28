"use strict";

module.exports = {
  sine(destination, playbackTime, { frequency }) {
    const t0 = playbackTime;
    const audioContext = destination.context;
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator1.frequency.value = frequency;
    oscillator1.detune.value = +12;
    oscillator1.start(t0);
    oscillator1.connect(gain);
    oscillator1.onended = () => {
      oscillator1.disconnect();
      oscillator2.disconnect();
      gain.disconnect();
    };

    oscillator2.frequency.value = frequency;
    oscillator2.detune.value = -12;
    oscillator2.start(t0);
    oscillator2.connect(gain);

    gain.gain.setValueAtTime(0.1, t0);

    return {
      noteOn() {
        gain.connect(destination);
      },
      noteOff() {
        oscillator1.stop(audioContext.currentTime);
        oscillator2.stop(audioContext.currentTime);
        gain.disconnect();
        oscillator1.disconnect();
        oscillator2.disconnect();
      }
    };
  }
};
