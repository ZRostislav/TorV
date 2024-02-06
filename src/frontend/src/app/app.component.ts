import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TorV';

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
  }

  str2() {
    this.str2Triger = this.toggleClass('str-2', this.str2Triger);
  }

  str3() {
    this.str3Triger = this.toggleClass('str-3', this.str3Triger);
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
  }

  str5() {
    this.str5Triger = this.toggleClass('str-5', this.str5Triger);
  }
}
