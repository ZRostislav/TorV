import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TorV';
  //

  mssapDisplayTitle = true;
  mssapDisablePositionSlider = true;
  mssapDisplayRepeatControls = true;
  mssapDisplayVolumeControls = true;
  mssapDisplayVolumeSlider = false;

  // Title Marquee
  msaapDisplayTitle = true;

  // Playlist Controls
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;

  // For Localisation
  msaapTableHeader = 'My Playlist';
  msaapTitleHeader = 'My Title';
  msaapArtistHeader = 'My Artist';
  msaapDurationHeader = 'My Duration';

  msaapPlaylist: Track[] = [
    {
      title: 'King1001',
      link: 'https://downloader.disk.yandex.ru/disk/20f0e2abf0ab035c734008611a0b5ea60fe38c6d04a79e6c162ce41760c19db2/65c7b76a/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
      artist: 'Crows',
      // duration: '5000',
    },
    {
      title: 'King',
      link: 'https://downloader.disk.yandex.ru/disk/20f0e2abf0ab035c734008611a0b5ea60fe38c6d04a79e6c162ce41760c19db2/65c7b76a/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
      artist: 'Crows',
      // duration: '5000',
    },
    {
      title: 'King1001',
      link: 'https://downloader.disk.yandex.ru/disk/20f0e2abf0ab035c734008611a0b5ea60fe38c6d04a79e6c162ce41760c19db2/65c7b76a/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
      artist: 'Crows',
      // duration: '5000',
    },
    {
      title: 'King',
      link: 'https://downloader.disk.yandex.ru/disk/20f0e2abf0ab035c734008611a0b5ea60fe38c6d04a79e6c162ce41760c19db2/65c7b76a/Gkg5XWie9hYko-PahYQ9Np4e9x7szMEkcm8Ult8s2WhDalouBqhFXmp25BChj4kYochCB0YcTN4J_u_k5yDYrg%3D%3D?uid=0&filename=a_simple_question.mp3&disposition=attachment&hash=&limit=0&content_type=audio%2Fmpeg&owner_uid=0&fsize=5220298&hid=2ff60e4dde9fb3cbeaf1c6398ed12648&media_type=audio&tknv=v2&etag=934ad8927c48e10f8164c2113039d246',
      artist: 'Crows',
      // duration: '5000',
    },
  ];
  //

  toggleClass(id: string, trigger: boolean) {
    const element = document.getElementById(id);
    if (element) {
      if (trigger) {
        element.classList.remove('on');
        element.classList.add('off');
      } else {
        element.classList.remove('off');
        element.classList.add('on');
      }
    }
    return !trigger;
  }

  str1Triger: boolean = false;
  str2Triger: boolean = false;
  str3Triger: boolean = false;
  str4Triger: boolean = false;
  str5Triger: boolean = false;

  str1() {
    this.str1Triger = this.toggleClass('str-1', this.str1Triger);

    if (this.str1Triger) {
      this.str2Triger = false;
      this.str3Triger = false;
      this.str4Triger = false;
      this.str5Triger = false;
      // Устанавливаем классы для остальных элементов
      document.getElementById('str-2')?.classList.remove('on');
      document.getElementById('str-2')?.classList.add('off');
      document.getElementById('str-3')?.classList.remove('on');
      document.getElementById('str-3')?.classList.add('off');
      document.getElementById('str-4')?.classList.remove('on');
      document.getElementById('str-4')?.classList.add('off');
      document.getElementById('str-5')?.classList.remove('on');
      document.getElementById('str-5')?.classList.add('off');

      const folder = document.getElementById('folder');
      if (folder) {
        folder.classList.add('off'); // Переключает класс 'off'
        folder.classList.remove('on'); // Переключает класс 'off'
      }

      const elements = [
        'center',
        'ramW',
        'ramWI',
        'ramWIC',
        'ramB',
        'ramBI',
        'ramBIC',
        'centerBacg',
      ];
      elements.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          element.classList.add('folderPowerOff');
          element.classList.remove('folderPowerOn');
        }
      });
    }
  }

  str2() {
    this.str2Triger = this.toggleClass('str-2', this.str2Triger);

    if (this.str2Triger) {
      this.str1Triger = false;
      this.str3Triger = false;
      this.str4Triger = false;
      this.str5Triger = false;
      // Устанавливаем классы для остальных элементов
      document.getElementById('str-1')?.classList.remove('on');
      document.getElementById('str-1')?.classList.add('off');
      document.getElementById('str-3')?.classList.remove('on');
      document.getElementById('str-3')?.classList.add('off');
      document.getElementById('str-4')?.classList.remove('on');
      document.getElementById('str-4')?.classList.add('off');
      document.getElementById('str-5')?.classList.remove('on');
      document.getElementById('str-5')?.classList.add('off');

      const folder = document.getElementById('folder');
      if (folder) {
        folder.classList.add('off'); // Переключает класс 'off'
        folder.classList.remove('on'); // Переключает класс 'off'
      }

      const elements = [
        'center',
        'ramW',
        'ramWI',
        'ramWIC',
        'ramB',
        'ramBI',
        'ramBIC',
        'centerBacg',
      ];
      elements.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          element.classList.add('folderPowerOff');
          element.classList.remove('folderPowerOn');
        }
      });
    }
  }

  str3() {
    this.str3Triger = this.toggleClass('str-3', this.str3Triger);

    if (this.str3Triger) {
      this.str1Triger = false;
      this.str2Triger = false;
      this.str4Triger = false;
      this.str5Triger = false;
      // Устанавливаем классы для остальных элементов
      document.getElementById('str-1')?.classList.remove('on');
      document.getElementById('str-1')?.classList.add('off');
      document.getElementById('str-2')?.classList.remove('on');
      document.getElementById('str-2')?.classList.add('off');
      document.getElementById('str-4')?.classList.remove('on');
      document.getElementById('str-4')?.classList.add('off');
      document.getElementById('str-5')?.classList.remove('on');
      document.getElementById('str-5')?.classList.add('off');

      const folder = document.getElementById('folder');
      if (folder) {
        folder.classList.add('off'); // Переключает класс 'off'
        folder.classList.remove('on'); // Переключает класс 'off'
      }

      const elements = [
        'center',
        'ramW',
        'ramWI',
        'ramWIC',
        'ramB',
        'ramBI',
        'ramBIC',
        'centerBacg',
      ];
      elements.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          element.classList.add('folderPowerOff');
          element.classList.remove('folderPowerOn');
        }
      });
    }
  }

  str4() {
    this.str4Triger = this.toggleClass('str-4', this.str4Triger);
    const folder = document.getElementById('folder');
    if (folder) {
      folder.classList.toggle('on'); // Переключает класс 'on'
      folder.classList.toggle('off'); // Переключает класс 'off'
    }
    const elements = [
      'center',
      'ramW',
      'ramWI',
      'ramWIC',
      'ramB',
      'ramBI',
      'ramBIC',
      'centerBacg',
    ];

    elements.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.toggle('folderPowerOn');
        element.classList.toggle('folderPowerOff');
      }
    });

    if (this.str4Triger) {
      this.str1Triger = false;
      this.str2Triger = false;
      this.str3Triger = false;
      this.str5Triger = false;
      // Устанавливаем классы для остальных элементов
      document.getElementById('str-1')?.classList.remove('on');
      document.getElementById('str-1')?.classList.add('off');
      document.getElementById('str-2')?.classList.remove('on');
      document.getElementById('str-2')?.classList.add('off');
      document.getElementById('str-3')?.classList.remove('on');
      document.getElementById('str-3')?.classList.add('off');
      document.getElementById('str-5')?.classList.remove('on');
      document.getElementById('str-5')?.classList.add('off');
    }
  }

  str5() {
    this.str5Triger = this.toggleClass('str-5', this.str5Triger);

    if (this.str5Triger) {
      this.str1Triger = false;
      this.str2Triger = false;
      this.str3Triger = false;
      this.str4Triger = false;
      // Устанавливаем классы для остальных элементов
      document.getElementById('str-1')?.classList.remove('on');
      document.getElementById('str-1')?.classList.add('off');
      document.getElementById('str-2')?.classList.remove('on');
      document.getElementById('str-2')?.classList.add('off');
      document.getElementById('str-3')?.classList.remove('on');
      document.getElementById('str-3')?.classList.add('off');
      document.getElementById('str-4')?.classList.remove('on');
      document.getElementById('str-4')?.classList.add('off');

      const folder = document.getElementById('folder');
      if (folder) {
        folder.classList.add('off'); // Переключает класс 'off'
        folder.classList.remove('on'); // Переключает класс 'off'
      }

      const elements = [
        'center',
        'ramW',
        'ramWI',
        'ramWIC',
        'ramB',
        'ramBI',
        'ramBIC',
        'centerBacg',
      ];
      elements.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          element.classList.add('folderPowerOff');
          element.classList.remove('folderPowerOn');
        }
      });
    }
  }
  //

  // window.onload = () => {
  //   const playBtn = document.createElement("button");
  //   playBtn.textContent = "Play";
  //   playBtn.addEventListener("click", playMusic);
  //   document.body.appendChild(playBtn);

  //   const pauseBtn = document.createElement("button");
  //   pauseBtn.textContent = "Pause";
  //   pauseBtn.addEventListener("click", pauseMusic);
  //   document.body.appendChild(pauseBtn);

  //   const stopBtn = document.createElement("button");
  //   stopBtn.textContent = "Stop";
  //   stopBtn.addEventListener("click", stopMusic);
  //   document.body.appendChild(stopBtn);
  // };

  // function playMusic() {
  //   const audioElement = new Audio("music.mp3");
  //   audioElement.play();
  // }

  // function pauseMusic() {
  //   // Находим текущий экземпляр аудио и приостанавливаем его
  //   const audioElement = document.querySelector("audio");
  //   if (audioElement) {
  //     audioElement.pause();
  //   }
  // }

  // function stopMusic() {
  //   // Находим текущий экземпляр аудио, останавливаем и сбрасываем его состояние
  //   const audioElement = document.querySelector("audio");
  //   if (audioElement) {
  //     audioElement.pause();
  //     audioElement.currentTime = 0;
  //   }
  // }
}
