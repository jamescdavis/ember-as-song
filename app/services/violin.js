import Service from '@ember/service';
import SampleLibrary from 'ember-as-song/lib/sample-library';

export default class ViolinService extends Service {
  name = 'Violin';

  inst = SampleLibrary.load({
    instruments: 'violin'
  }).toMaster();
}
