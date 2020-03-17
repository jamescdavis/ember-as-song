import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { Part, Draw, Time } from 'tone';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PartComponent extends Component {
  @service timeline;

  notes = [];
  @tracked mute = false;
  @tracked activeNote = -1;

  constructor(owner, args) {
    super(owner, args);
    if (this.args.subInstrument) {
      this.instrument = this.args.instrument[this.args.subInstrument];
    } else {
      this.instrument = this.args.instrument;
    }
    if (typeof args.mute === 'boolean') {
      this.mute = args.mute;
    }
    if (typeof args.volume === 'number') {
      this.instrument.inst.volume.value = args.volume;
    }
  }

  willDestroy() {
    this.part.removeAll();
  }

  @action
  triggerSynth(time, note) {
    const { defaultPitch } = this.instrument;
    const { pitch = defaultPitch, duration = '4n', velocity } = note;
    const { inst } = this.instrument;
    if (pitch && velocity) {
      inst.triggerAttackRelease(pitch, duration, time, velocity);
    } else if (pitch) {
      inst.triggerAttackRelease(pitch, duration, time);
    } else if (velocity) {
      inst.triggerAttackRelease(duration, time, velocity);
    } else {
      inst.triggerAttackRelease(duration, time);
    }
    Draw.schedule(() => {
      this.activeNote = note.id;
    }, time);
    Draw.schedule(() => {
      this.activeNote = -1;
    }, time + Time(duration).toSeconds());
  }

  @action
  addNote(note) {
    const id = this.notes.length;
    this.notes.push({ id, ...note });
    return id;
  }

  @action
  initPart() {
    this.part = new Part(this.triggerSynth, this.notes);
    this.part.loop = this.args.loop;
    this.part.start(`${(this.args.start || 0) + this.timeline.currentMeasure}m`);
    this.part.mute = this.mute;
    this.part.humanize = this.args.humanize || false;
    this.part.loopStart = this.args.loopStart || '0';
    if (this.args.loopEnd) {
      this.part.loopEnd = this.args.loopEnd;
    }
  }

  @action
  toggleMute() {
    this.mute = !this.mute;
    this.part.mute = this.mute;
  }

  get name() {
    return this.args.name || (this.args.subInstrument && this.instrument.name);
  }
}
