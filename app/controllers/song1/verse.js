import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class Song1VerseController extends Controller {
  @service bass;
  @service lead;
  @service drums;
  @service timeline;

  get lastVerse() {
    return this.timeline.currentVerse >= this.timeline.verseCount;
  }

  get notLastVerse() {
    return this.timeline.currentVerse < this.timeline.verseCount;
  }
}
