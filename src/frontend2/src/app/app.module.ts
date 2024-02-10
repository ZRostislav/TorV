import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AudioPlayer } from './audio-player/audio-player.component';

@NgModule({
  declarations: [AppComponent, AudioPlayer],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
