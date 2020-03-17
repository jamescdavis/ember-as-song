import Service from '@ember/service';
import SampleLibrary from 'ember-as-song/lib/sample-library';

export default class PianoService extends Service {
  name = 'Piano';

  inst = SampleLibrary.load({
    instruments: 'piano'
  }).toMaster();
}
