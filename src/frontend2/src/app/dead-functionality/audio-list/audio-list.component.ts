import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.css'],
})
export class AudioListComponent {
  @Input() songs: any[] = [];
  @Input() openSong: any;
}
