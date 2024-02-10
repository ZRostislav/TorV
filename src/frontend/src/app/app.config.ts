import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AudioPlayer } from './audio-player/audio-player.component';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
