import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayer {
  @Output() songSelected = new EventEmitter<string>();

  song = new Audio();

  songs = [
    {
      url: 'https://downloader.disk.yandex.ru/disk/84089c80cdc8c4e2eab300b4168d653e1f10402e13e82ebf546b724cfcf9637c/65c60eee/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
      name: 'TEST',
    },
    {
      url: 'https://downloader.disk.yandex.ru/disk/84089c80cdc8c4e2eab300b4168d653e1f10402e13e82ebf546b724cfcf9637c/65c60eee/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
      name: 'TEST1',
    },
    {
      url: 'https://downloader.disk.yandex.ru/disk/84089c80cdc8c4e2eab300b4168d653e1f10402e13e82ebf546b724cfcf9637c/65c60eee/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
      name: 'TEST2',
    },
  ];

  OpenSongs(song: any) {
    this.song.src = song;
    this.song.load();
    this.song.play();
  }

  playSong() {
    this.song.play();
  }

  pauseSong() {
    this.song.pause();
  }
  stopSong() {
    this.song.pause();
    this.song.currentTime = 0;
  }
  vol(vl: any) {
    this.song.volume = vl.target.value;
  }
  onSongSelected(url: string) {
    this.songSelected.emit(url);
  }
}
