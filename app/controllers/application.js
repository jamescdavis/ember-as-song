import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { Transport, Master } from 'tone';

export default class ApplicationController extends Controller {
  @service timeline;
  @service router;

  @tracked playing = false;
  @tracked paused = false;
  @tracked muted = false;

  @action
  play() {
    if (this.playing) {
      this.pause();
      return;
    }
    Transport.start();
    this.playing = true;
    this.paused = false;
  }

  @action
  pause() {
    if (this.paused) {
      this.play();
      return;
    }
    Transport.pause();
    this.playing = false;
    this.paused = true;
  }

  @action
  stop() {
    Transport.stop();
    this.playing = false;
    this.paused = false;
  }

  @action
  mute() {
    Master.mute = !Master.mute;
    this.muted = !this.muted;
  }

  @action volumeUp() {
    Master.volume.value++;
  }

  @action volumeDown() {
    Master.volume.value--;
  }
}
