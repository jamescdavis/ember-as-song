import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('hello');
  this.route('scale');
  this.route('two-instruments');
  this.route('multi-part');
  this.route('loop');
  this.route('drum-kit');
});
