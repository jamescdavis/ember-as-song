import Service from '@ember/service';
import SampleLibrary from 'ember-as-song/lib/sample-library';

export default class FluteService extends Service {
  name = 'Flute';

  inst = SampleLibrary.load({
    instruments: 'flute'
  }).toMaster();
}
