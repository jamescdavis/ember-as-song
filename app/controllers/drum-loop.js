import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class DrumLoopController extends Controller {
  @service drums;
}
