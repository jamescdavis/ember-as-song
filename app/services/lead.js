import Service from '@ember/service';
import SampleLibrary from 'ember-as-song/lib/sample-library';

export default class LeadService extends Service {
  name = 'Lead';

  inst = SampleLibrary.load({
    instruments: 'guitar-electric'
  }).toMaster();
}
