import { Component } from '@angular/core';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-play-stop-button',
  template: `
    <button (click)="toggleMusic()">
      {{ musicService.isPlaying ? 'Остановить' : 'Включить' }} музыку
    </button>
  `,
})
export class PlayStopButtonComponent {
  constructor(public musicService: MusicService) {}

  toggleMusic() {
    this.musicService.toggleMusic();
  }
}
