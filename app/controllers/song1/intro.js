import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class Song1IntroController extends Controller {
  @service bass;
  @service lead;
}
