// import React from "react";
// import { useState, useEffect } from "react";

import Rectangle_5 from "./assets/img/Rectangle_5.png";
import Rectangle_6 from "./assets/img/Rectangle_6.png";
import Rectangle_7 from "./assets/img/Rectangle_7.png";
import Rectangle_8 from "./assets/img/Rectangle_8.png";
import Opened_Folder from "./assets/img/Opened Folder.png";
import Paint_Brush_Black from "./assets/img/Paint_Brush_Black.png";
import Downloads_Folder_Black from "./assets/img/Downloads_Folder_Black.png";
import Love_black from "./assets/img/Love_black.png";
import Time_Machine_black from "./assets/img/Time_Machine_black.png";
import Music from "./assets/img/Music.png";

import Play from "./assets/img/testing/play.png";
import Stop from "./assets/img/testing/stop.png";
import p from "./assets/img/testing/p.png";
import w from "./assets/img/testing/w.png";

import Save from "./assets/img/testing/save.png";
import Lovers from "./assets/img/testing/lovers.png";
import Download from "./assets/img/testing/download.png";

import React, { useState, useEffect } from "react";
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
  const [progressType, setProgressType] = useState<ProgressUI>("bar");
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
    artwork: true,
    progress: false,
    playList: true,
  });

  document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("play-button");
    const ramWAudioPlay = document.getElementById("ramWAudioPlay");

    if (playButton && ramWAudioPlay) {
      playButton.addEventListener("click", () => {
        ramWAudioPlay.src = "./assets/img/testing/stop.png"; // Укажите путь к вашему изображению стопа
      });
    }
  });

  useEffect(() => {
    const prevNextButtons = document.querySelectorAll(".prev-n-next-button");
    const prevPlay = document.querySelector(".play-button") as HTMLElement;

    const ramWAudioP = document.getElementById("ramWAudioP") as HTMLElement;
    const ramWAudioW = document.getElementById("ramWAudioW") as HTMLElement;
    const ramWAudioPlay = document.getElementById(
      "ramWAudioPlay"
    ) as HTMLElement;

    const handleMouseOverW = () => {
      ramWAudioW.classList.add("hovered");
      ramWAudioP.classList.add("hovered");
      const elementsWithWhiteClass = document.querySelectorAll(".White");
      elementsWithWhiteClass.forEach((element) => {
        element.classList.remove("White");
      });
    };

    const handleMouseOutW = () => {
      ramWAudioW.classList.remove("hovered");
      ramWAudioP.classList.remove("hovered");
    };

    const handleMouseOverPlay = () => {
      ramWAudioPlay.classList.add("hovered");
    };

    const handleMouseOutPlay = () => {
      ramWAudioPlay.classList.remove("hovered");
    };

    prevNextButtons.forEach((button) => {
      button.addEventListener("mouseover", handleMouseOverW);
      button.addEventListener("mouseout", handleMouseOutW);
    });

    prevPlay.addEventListener("mouseover", handleMouseOverPlay);
    prevPlay.addEventListener("mouseout", handleMouseOutPlay);

    const handlePlayButtonClick = () => {
      const ramWAudioPlay = document.getElementById(
        "ramWAudioPlay"
      ) as HTMLImageElement;
      if (ramWAudioPlay) {
        if (ramWAudioPlay.src.includes(Play)) {
          ramWAudioPlay.src = Stop;
        } else {
          ramWAudioPlay.src = Play;
        }
      }
    };

    const playButton = document.querySelector(".play-button");
    if (playButton) {
      playButton.addEventListener("click", handlePlayButtonClick);
    }

    return () => {
      if (playButton) {
        playButton.removeEventListener("click", handlePlayButtonClick);
      }
    };
  }, []);

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

                  zIndex: 9999,
                }}
              />
            </div>
          </div>
          <div id="ramW" className="ram-w folderPowerOff">
            <div id="AudioPlayersW" className="ram-w-audio-players">
              <img
                id="ramWAudioW"
                className="ram-w-audio-players-icons"
                src={w}
                alt=""
              />
              <img
                id="ramWAudioPlay"
                className="ram-w-audio-players-icons"
                src={Play}
                alt=""
              />
              <img
                id="ramWAudioP"
                className="ram-w-audio-players-icons"
                src={p}
                alt=""
              />
            </div>
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
            <div id="AudioPlayersB" className="ram-b-audio-players">
              <img
                id="ramBAudioSave"
                className="ram-b-audio-players-icons"
                src={Save}
                alt=""
              />
              <img
                id="ramBAudioLovers"
                className="ram-b-audio-players-icons"
                src={Lovers}
                alt=""
              />
              <img
                id="ramBAudioDownload"
                className="ram-b-audio-players-icons"
                src={Download}
                alt=""
              />
            </div>
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

        <div id="WindowFolder" className="folder folderOff">
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

        <div id="WindowDownloads" className="folder folderOff">
          <div className="folder-bacg"></div>
          <div className="folder-header">
            <img className="folder-icon" src={Downloads_Folder_Black} alt="" />
            <p className="folder-name">Загрузки</p>
          </div>
        </div>

        <div id="WindowLiked" className="folder folderOff">
          <div className="folder-bacg"></div>
          <div className="folder-header">
            <img className="folder-icon" src={Love_black} alt="" />
            <p className="folder-name">Понравившиеся</p>
          </div>
        </div>

        <div id="WindowHistory" className="folder folderOff">
          <div className="folder-bacg"></div>
          <div className="folder-header">
            <img className="folder-icon" src={Time_Machine_black} alt="" />
            <p className="folder-name">История</p>
          </div>
        </div>

        <div id="WindowThemes" className="folder folderOff">
          <div className="folder-bacg"></div>
          <div className="folder-header">
            <img className="folder-icon" src={Paint_Brush_Black} alt="" />
            <p className="folder-name">Тема</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Menu;
