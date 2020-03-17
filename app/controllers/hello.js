import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class HelloController extends Controller {
  @service piano;
}
