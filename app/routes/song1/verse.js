import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Transport, TransportTime } from 'tone';

export default class Song1VerseRoute extends Route {
  @service timeline;

  measures = 12;

  activate() {
    this.timeline.currentVerse++;
    if (this.timeline.currentVerse < this.timeline.verseCount) {
      const length = TransportTime(`${this.measures}m`).toSeconds();
      Transport.scheduleOnce(
        () => {
          this.transitionTo('song1.chorus');
        },
        this.timeline.currentTime + length - 0.2
      );
    }
  }

  deactivate() {
    this.timeline.currentMeasure += this.measures;
  }
}
