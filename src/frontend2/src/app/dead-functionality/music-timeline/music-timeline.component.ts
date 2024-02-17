import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-music-timeline',
  templateUrl: './music-timeline.component.html',
  styleUrls: ['./music-timeline.component.css'],
})
export class MusicTimelineComponent implements OnInit {
  @Input() totalDuration: number = 0;

  currentPosition: number = 0;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.currentPosition = 0;
  }

  onPositionChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      this.currentPosition = parseFloat(target.value);
    }
  }
}
