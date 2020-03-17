import Service from '@ember/service';
import { MembraneSynth } from 'tone';

export default class BassService extends Service {
  name = 'Bass';

  inst = new MembraneSynth({
    pitchDecay: 0.03,
    octaves: 2,
    oscillator: {
      type: 'sine'
    },
    envelope: {
      attack: 0.02,
      decay: 0.5,
      sustain: 0.001,
      release: 0.1,
      attackCurve: 'exponential'
    }
  }).toMaster();
}
