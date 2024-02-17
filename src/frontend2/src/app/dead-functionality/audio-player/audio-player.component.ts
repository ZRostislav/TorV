import { Component, EventEmitter, Output } from '@angular/core';
import { SongService } from './song.service';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayer {
  @Output() songSelected = new EventEmitter<string>();

  getSongs(): any[] {
    return [
      {
        url: 'https://downloader.disk.yandex.ru/disk/20f0e2abf0ab035c734008611a0b5ea60fe38c6d04a79e6c162ce41760c19db2/65c7b76a/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
        name: 'Song 1222222',
      },
      {
        url: 'https://downloader.disk.yandex.ru/disk/20f0e2abf0ab035c734008611a0b5ea60fe38c6d04a79e6c162ce41760c19db2/65c7b76a/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
        name: 'Song 2',
      },
      {
        url: 'https://downloader.disk.yandex.ru/disk/20f0e2abf0ab035c734008611a0b5ea60fe38c6d04a79e6c162ce41760c19db2/65c7b76a/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
        name: 'Song 3',
      },
    ];
  }

  song = new Audio();
  songs: any[];

  constructor(private SongService: SongService) {
    this.songs = this.SongService.getSongs();
  }

  OpenSongs(song: any) {
    this.song.src = song.url;
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
