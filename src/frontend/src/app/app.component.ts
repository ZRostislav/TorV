import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudioService } from './audio-list/audio.service';
import { AudioPlayer } from './audio-player/audio-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TorV';

  constructor(private audioService: AudioService) {}

  getAudioUrlById(id: number): string {
    return this.audioService.getAudioUrlById(id);
  }

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
