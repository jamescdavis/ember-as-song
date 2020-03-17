import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default class Song1Controller extends Controller {
  @service drums;

  constructor() {
    super(...arguments);
    const introRoute = getOwner(this).lookup('route:song1.intro');
    const verseRoute = getOwner(this).lookup('route:song1.verse');
    const chorusRoute = getOwner(this).lookup('route:song1.chorus');

    this.measures =
      introRoute.measures +
      verseRoute.measures +
      chorusRoute.measures +
      verseRoute.measures - 1;
  }
}
