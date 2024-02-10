import { Injectable, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudioFile } from './audio-file.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audioFiles: AudioFile[] = [
    {
      id: 1,
      title: 'Song 1',
      url: 'https://downloader.disk.yandex.ru/disk/84089c80cdc8c4e2eab300b4168d653e1f10402e13e82ebf546b724cfcf9637c/65c60eee/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
    },
    { id: 2, title: 'Song 2', url: 'http://example.com/song2.mp3' },
    { id: 3, title: 'Song 3', url: 'http://example.com/song3.mp3' },
    // Добавьте здесь остальные файлы, если необходимо
  ];

  getAudioFiles(): Observable<AudioFile[]> {
    return of(this.audioFiles);
  }

  getAudioUrlById(id: number): string {
    const audioFile = this.audioFiles.find((file) => file.id === id);
    return audioFile ? audioFile.url : '';
  }

  getAudioTitleById(id: number): string {
    const audioFile = this.audioFiles.find((file) => file.id === id);
    return audioFile ? audioFile.title : '';
  }
}
