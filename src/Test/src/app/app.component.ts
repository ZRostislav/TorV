import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Test';

  // Main Player Controls
  msaapDisplayPlayList = true;
  msaapDisablePositionSlider = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayVolumeControls = true;
  msaapDisplayVolumeSlider = false;

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

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Audio One Title',
      link: 'Link to Audio One URL',
      artist: 'Artist',
    },
    {
      title: 'Audio Two Title',
      link: 'Link to Audio Two URL',
      artist: 'Artist',
    },
    {
      title: 'Audio Three Title',
      link: 'Link to Audio Three URL',
      artist: 'Artist',
    },
  ];
}
