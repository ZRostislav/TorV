import React from "react";
import { useState } from "react";

import Rectangle_5 from "./assets/img/Rectangle_5.png";
import Rectangle_6 from "./assets/img/Rectangle_6.png";
import Rectangle_7 from "./assets/img/Rectangle_7.png";
import Rectangle_8 from "./assets/img/Rectangle_8.png";
import Opened_Folder from "./assets/img/Opened Folder.png";
import Music from "./assets/img/Music.png";

import AudioPlayer, {
  ActiveUI,
  InterfaceGridTemplateArea,
  PlayerPlacement,
  PlayListPlacement,
  ProgressUI,
  VolumeSliderPlacement,
} from "react-modern-audio-player";
import Editor from "./Editor.tsx";

import { playList } from "./playList.ts";

function Menu() {
  const [count, setCount] = useState(0);

  const [progressType, setProgressType] = useState<ProgressUI>(false);
  const [playerPlacement, setPlayerPlacement] =
    useState<PlayerPlacement>("static");
  const [interfacePlacement, setInterfacePlacement] =
    useState<InterfaceGridTemplateArea>({
      // playList: "row2-1",
      // // progress: "row1-2",
      // playButton: "row2-2",
      // // volume: "row2-3",
    });
  const [playListPlacement, setPlayListPlacement] =
    useState<PlayListPlacement>("bottom");
  const [volumeSliderPlacement, setVolumeSliderPlacement] =
    useState<VolumeSliderPlacement>();
  const [theme, setTheme] = useState<"dark" | "light" | undefined>();
  const [width, setWidth] = useState("100%");
  const [activeUI, setActiveUI] = useState<ActiveUI>({
    playButton: true,
    prevNnext: true,
    progress: false,
  });
  return (
    <main className="main">
      <div className="content">
        <div id="center" className="center folderPowerOff">
          <div>
            <div className="player-container-menu">
              <AudioPlayer
                playList={playList}
                activeUI={{
                  ...activeUI,
                  progress: progressType,
                }}
                placement={{
                  player: playerPlacement,
                  interface: {
                    templateArea: interfacePlacement,
                  },
                  playList: playListPlacement,
                  volumeSlider: volumeSliderPlacement,
                }}
                rootContainerProps={{
                  colorScheme: theme,
                  width,
                }}
              />
            </div>
          </div>
          <div id="ramW" className="ram-w folderPowerOff">
            <img
              id="ramWI"
              className="ram-w-i folderPowerOff"
              src={Rectangle_5}
              alt=""
            />
            <img
              id="ramWIC"
              className="ram-w-i-c folderPowerOff"
              src={Rectangle_7}
              alt=""
            />
          </div>
          <div id="ramB" className="ram-b folderPowerOff">
            <img
              id="ramBI"
              className="ram-b-i folderPowerOff"
              src={Rectangle_6}
              alt=""
            />
            <img
              id="ramBIC"
              className="ram-b-i-c folderPowerOff"
              src={Rectangle_8}
              alt=""
            />
          </div>

          <div id="centerBacg" className="center-bacg folderPowerOff"></div>
        </div>

        <div id="folder" className="folder off">
          <div className="folder-bacg"></div>
          <div className="folder-header">
            <img className="folder-icon" src={Opened_Folder} alt="" />
            <p className="folder-name">Название Папки</p>
          </div>

          <div className="folder-list">
            <ul className="folder-list-t">
              <img className="folder-list-icon" src={Music} alt="" />
              <li className="folder-list-name">1</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Menu;
