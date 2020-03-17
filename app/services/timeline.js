import Service from '@ember/service';
import { TransportTime } from 'tone';

export default class TimelineService extends Service {
  currentMeasure = 0;
  currentVerse = 0;
  verseCount = 2;

  get currentTime() {
    return TransportTime(`${this.currentMeasure}m`).toSeconds();
  }
}
