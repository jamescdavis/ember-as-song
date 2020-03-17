import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class TwoInstrumentsController extends Controller {
  @service piano;
  @service violin;
}
