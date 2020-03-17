import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Transport, TransportTime } from 'tone';

export default class Song1ChorusRoute extends Route {
  @service timeline;

  measures = 4;

  activate() {
    const length = TransportTime(`${this.measures}m`).toSeconds();

    Transport.scheduleOnce(
      () => {
        this.transitionTo('song1.verse');
      },
      this.timeline.currentTime + length - 0.2,
    );
  }

  deactivate() {
    this.timeline.currentMeasure += this.measures;
  }
}
