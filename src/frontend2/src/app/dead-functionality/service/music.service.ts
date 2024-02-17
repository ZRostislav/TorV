import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  playlist: { id: number; name: string; url: string }[] = [
    {
      id: 1,
      name: 'Song 1',
      url: 'https://downloader.disk.yandex.ru/disk/20f0e2abf0ab035c734008611a0b5ea60fe38c6d04a79e6c162ce41760c19db2/65c7b76a/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
    },
    {
      id: 2,
      name: 'Song 2',
      url: 'https://downloader.disk.yandex.ru/disk/20f0e2abf0ab035c734008611a0b5ea60fe38c6d04a79e6c162ce41760c19db2/65c7b76a/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
    },
    // Добавьте остальные треки здесь
  ];

  isPlaying: boolean = false;
  currentTrackIndex: number = -1;
  audioPlayer: HTMLAudioElement = new Audio();

  constructor() {}

  playMusic() {
    if (this.currentTrackIndex !== -1) {
      this.audioPlayer.src = this.playlist[this.currentTrackIndex].url;
      this.audioPlayer.play();
      this.isPlaying = true;
    }
  }

  stopMusic() {
    this.audioPlayer.pause();
    this.isPlaying = false;
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.stopMusic();
    } else {
      this.playMusic();
    }
  }

  nextTrack() {
    if (this.currentTrackIndex < this.playlist.length - 1) {
      this.currentTrackIndex++;
    } else {
      this.currentTrackIndex = 0; // Переключаем на начало списка
    }
    this.playMusic();
  }

  prevTrack() {
    if (this.currentTrackIndex > 0) {
      this.currentTrackIndex--;
    } else {
      this.currentTrackIndex = this.playlist.length - 1; // Переключаем на конец списка
    }
    this.playMusic();
  }

  setVolume(volume: number) {
    this.audioPlayer.volume = volume;
  }

  getCurrentTrack() {
    return this.playlist[this.currentTrackIndex];
  }

  playRandomTrack() {
    const randomIndex = Math.floor(Math.random() * this.playlist.length);
    this.currentTrackIndex = randomIndex;
    this.playMusic();
  }
}
