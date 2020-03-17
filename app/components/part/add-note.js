import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PartAddNoteComponent extends Component {
  @tracked id;

  constructor(owner, args) {
    super(owner, args);
    this.pitch = args.pitch || args.p;
    this.time = args.time || args.t;
    this.duration = args.duration || args.d;
    this.velocity = args.velocity || args.v;
    const { pitch, duration, time = '0', velocity } = this;
    this.id = args.addNote({ pitch, duration, time, velocity });
  }

  get active() {
    return this.args.activeNote === this.id;
  }
}
