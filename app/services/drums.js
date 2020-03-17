import Service from '@ember/service';
import { Filter, MembraneSynth, MetalSynth, PanVol } from 'tone';
import SampleLibrary from 'ember-as-song/lib/sample-library';

export default class DrumsService extends Service {
  name = 'Drum Kit';

  kick = {
    name: 'Kick',
    defaultPitch: 'C1',
    inst: new MembraneSynth({
      pitchDecay: 0.07,
      octaves: 5,
      oscillator: {
        type: 'sine'
      },
      envelope: {
        attack: 0.001,
        decay: 0.2,
        sustain: 0.002,
        release: 1,
        attackCurve: 'exponential'
      }
    }).toMaster(),
  };

  snare = {
    name: 'Snare',
    defaultPitch: 'C4',
    inst: SampleLibrary.load({
      instruments: 'snare'
    }).toMaster(),
  };

  hihatPan = new PanVol({
    pan: 0.35
  }).toMaster();

  hihat = {
    name: 'Hi-hat',
    inst: new MetalSynth({
      frequency: 200,
      envelope: {
        attack: 0.008,
        decay: 0.052,
        release: 0.002
      },
      harmonicity: 5.1,
      modulationindex: 32,
      resonance: 3000,
      octaves: 1.5
    }).connect(this.hihatPan),
  }

  ohihatLowPass = new Filter({
    frequency: 5000,
	}).toMaster();

  ohihat = {
    name: 'Open Hi-hat',
    inst: new MetalSynth({
      frequency: 100,
      envelope: {
        attack: 0.008,
        decay: 0.52,
        release: 0.2
      },
      harmonicity: 5.1,
      modulationindex: 32,
      resonance: 3000,
      octaves: 2.5
    }).connect(this.ohihatLowPass),
  }

  hihat2Pan = new PanVol({
    pan: -0.3
  }).toMaster();

  hihat2 = {
    name: 'Hihat 2',
    inst: new MetalSynth({
      frequency: 400,
      envelope: {
        attack: 0.01,
        decay: 0.01,
        release: 0.005
      },
      harmonicity: 1.1,
      modulationIndex: 24,
      resonance: 4000,
      octaves: 2.5
    }).connect(this.hihat2Pan),
  }
}
