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

//themes2
import PlayTheme2 from "./assets/img/testing/playTheme2.png";
import StopTheme2 from "./assets/img/testing/stopTheme2.png";
import pTheme2 from "./assets/img/testing/pTheme2.png";
import wTheme2 from "./assets/img/testing/wTheme2.png";

import SaveTheme2 from "./assets/img/testing/saveTheme2.png";
import LoversTheme2 from "./assets/img/testing/loversTheme2.png";
import DownloadTheme2 from "./assets/img/testing/downloadTheme2.png";

//themes3
import PlayTheme3 from "./assets/img/testing/playTheme3.png";
import StopTheme3 from "./assets/img/testing/stopTheme3.png";
import pTheme3 from "./assets/img/testing/pTheme3.png";
import wTheme3 from "./assets/img/testing/wTheme3.png";

import SaveTheme3 from "./assets/img/testing/saveTheme3.png";
import LoversTheme3 from "./assets/img/testing/loversTheme3.png";
import DownloadTheme3 from "./assets/img/testing/downloadTheme3.png";

import back1 from "./assets/img/сам_фон.jpg";
import back2 from "./assets/img/testing/back2.jpg";
import back3 from "./assets/img/testing/back3.jpg";

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

interface PlaylistItem {
  id: string;
  img: string;
  name: string;
  writer: string;
}

function Menu({ visionCountHeader, setVisionCountHeader }: any) {
  const [currentTheme, setCurrentTheme] = useState<
    "theme1" | "theme2" | "theme3"
  >("theme1");
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

  useEffect(() => {
    const handlePlayButtonClick = () => {
      const ramWAudioPlay = document.getElementById(
        "ramWAudioPlay"
      ) as HTMLImageElement;
      if (ramWAudioPlay) {
        // Проверка текущей темы
        if (currentTheme === "theme2") {
          // Установка src в соответствии с темой 2
          if (ramWAudioPlay.src.includes(PlayTheme2)) {
            ramWAudioPlay.src = StopTheme2;
          } else if (ramWAudioPlay.src.includes(StopTheme3)) {
            ramWAudioPlay.src = PlayTheme2;
          } else {
            ramWAudioPlay.src = PlayTheme2;
          }
        } else if (currentTheme === "theme3") {
          // Установка src в соответствии с темой 3
          if (ramWAudioPlay.src.includes(PlayTheme3)) {
            ramWAudioPlay.src = StopTheme3;
          } else if (ramWAudioPlay.src.includes(StopTheme2)) {
            ramWAudioPlay.src = PlayTheme3;
          } else {
            ramWAudioPlay.src = PlayTheme3;
          }
        } else if (currentTheme === "theme1") {
          // Установка src в соответствии с темой 3
          if (ramWAudioPlay.src.includes(Play)) {
            ramWAudioPlay.src = Stop;
          } else {
            ramWAudioPlay.src = Play;
          }
        } else {
          // Установка src по умолчанию (для темы 1)
          if (ramWAudioPlay.src.includes(Play)) {
            ramWAudioPlay.src = Stop;
          } else {
            ramWAudioPlay.src = Play;
          }
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
  }, [currentTheme]);

  const Themes3 = () => {
    const themi3 = document.querySelectorAll(
      ".icon-bacg, .icon-bacg2, .shil, .folder-bacg, .center-bacg, .strelka, .selectionMenu, .Bck"
    );

    const ramWAudioW = document.getElementById("ramWAudioW");
    const ramWAudioPlay = document.getElementById("ramWAudioPlay");
    const ramAudioP = document.getElementById("ramWAudioP");

    const ramBAudioSave = document.getElementById("ramBAudioSave");
    const ramBAudioLovers = document.getElementById("ramBAudioLovers");
    const ramBAudioDownload = document.getElementById("ramBAudioDownload");

    if (ramWAudioW) {
      ramWAudioW.src = wTheme3;
    }
    if (ramWAudioPlay) {
      ramWAudioPlay.src = PlayTheme3;
    }
    if (ramAudioP) {
      ramAudioP.src = pTheme3;
    }
    if (ramBAudioSave) {
      ramBAudioSave.src = SaveTheme3;
    }
    if (ramBAudioLovers) {
      ramBAudioLovers.src = LoversTheme3;
    }
    if (ramBAudioDownload) {
      ramBAudioDownload.src = DownloadTheme3;
    }

    themi3.forEach((themi3) => {
      themi3.classList.add("themeis3");
    });

    setCurrentTheme("theme3");
  };

  const Themes2 = () => {
    const themi2 = document.querySelectorAll(
      ".icon-bacg, .icon-bacg2, .shil, .folder-bacg, .center-bacg, .strelka, .selectionMenu, .Bck"
    );

    const ramWAudioW = document.getElementById("ramWAudioW");
    const ramWAudioPlay = document.getElementById("ramWAudioPlay");
    const ramAudioP = document.getElementById("ramWAudioP");

    const ramBAudioSave = document.getElementById("ramBAudioSave");
    const ramBAudioLovers = document.getElementById("ramBAudioLovers");
    const ramBAudioDownload = document.getElementById("ramBAudioDownload");

    if (ramWAudioW) {
      ramWAudioW.src = wTheme2;
    }
    if (ramWAudioPlay) {
      ramWAudioPlay.src = PlayTheme2;
    }
    if (ramAudioP) {
      ramAudioP.src = pTheme2;
    }
    if (ramBAudioSave) {
      ramBAudioSave.src = SaveTheme2;
    }
    if (ramBAudioLovers) {
      ramBAudioLovers.src = LoversTheme2;
    }
    if (ramBAudioDownload) {
      ramBAudioDownload.src = DownloadTheme2;
    }

    themi2.forEach((themi2) => {
      themi2.classList.add("themeis2");
      themi2.classList.remove("themeis3");
    });

    setCurrentTheme("theme2");
  };

  const Themes1 = () => {
    const themi1 = document.querySelectorAll(
      ".icon-bacg, .icon-bacg2, .shil, .folder-bacg, .center-bacg, .strelka, .selectionMenu, .Bck"
    );

    const ramWAudioW = document.getElementById("ramWAudioW");
    const ramWAudioPlay = document.getElementById("ramWAudioPlay");
    const ramAudioP = document.getElementById("ramWAudioP");

    const ramBAudioSave = document.getElementById("ramBAudioSave");
    const ramBAudioLovers = document.getElementById("ramBAudioLovers");
    const ramBAudioDownload = document.getElementById("ramBAudioDownload");

    if (ramWAudioW) {
      ramWAudioW.src = w;
    }
    if (ramWAudioPlay) {
      ramWAudioPlay.src = Play;
    }
    if (ramAudioP) {
      ramAudioP.src = p;
    }
    if (ramBAudioSave) {
      ramBAudioSave.src = Save;
    }
    if (ramBAudioLovers) {
      ramBAudioLovers.src = Lovers;
    }
    if (ramBAudioDownload) {
      ramBAudioDownload.src = Download;
    }

    themi1.forEach((themi1) => {
      themi1.classList.remove("themeis2", "themeis3");
    });
    setCurrentTheme("theme1");
  };

  const [visionCount, setVisionCount] = useState(1);

  const handleSongClickSSS = (songId: string) => {
    const idStringSSid = songId; // Формируем id элемента списка истории песен
    const listElementSSS = document.getElementById(idStringSSid);
    if (listElementSSS) {
      simulateClick(listElementSSS); // Передаем найденный элемент в функцию simulateClick
    }
  };

  function simulateClick(element: any) {
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    element.dispatchEvent(event);
  }

  const [playListItems, setPlayListItems] = useState<PlaylistItem[]>([]);

  const playButton = () => {
    const playButton = document.getElementById("playB");
    simulateClick(playButton);
  };
  const ramWAudioWS = () => {
    const ramWP = document.getElementById("ramWP");
    simulateClick(ramWP);
    if (visionCountHeader === playList.length) {
      setVisionCountHeader(1); // Первый id
    } else {
      setVisionCountHeader(visionCountHeader + 1);
    }
    // simulateClick(prevNextButtons);
  };

  const ramWAudioPS = () => {
    const ramWW = document.getElementById("ramWW");
    simulateClick(ramWW);
    if (visionCountHeader === 1) {
      setVisionCountHeader(playList.length); // Последний id
    } else {
      setVisionCountHeader(visionCountHeader - 1);
    }
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".prev-n-next-button");
    const playButton = document.querySelectorAll(".play-button");
    playButton.forEach(function (button) {
      // Set the id attribute of each playButton element to "playB"
      button.id = "playB";
    });

    buttons.forEach((button, index) => {
      if (index === 0) {
        button.id = "ramWW";
      } else if (index === 1) {
        button.id = "ramWP";
      }
    });
  }, []);

  useEffect(() => {
    const song = playList.find((song) => song.id === visionCountHeader);

    if (
      song &&
      visionCountHeader !== playListItems[playListItems.length - 1]?.id
    ) {
      // Если песня найдена и visionCountHeader изменился, создаем новый объект
      const newSong = {
        id: song.id,
        img: song.img,
        name: song.name,
        writer: song.writer,
      };
      // Обновляем состояние плейлиста, добавляя новую песню в список
      setPlayListItems([...playListItems, newSong]);
    }
  }, [playList, visionCountHeader, playListItems]);

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
            <div id="AudioPlayersW" className="ram-w-audio-players">
              <img
                id="ramWAudioW"
                className="ram-w-audio-players-icons"
                onClick={() => ramWAudioPS()}
                src={w}
                alt=""
              />
              <img
                id="ramWAudioPlay"
                className="ram-w-audio-players-icons"
                onClick={() => playButton()}
                src={Play}
                alt=""
              />
              <img
                id="ramWAudioP"
                className="ram-w-audio-players-icons"
                onClick={() => ramWAudioWS()}
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
            <ul className="folder-history-song">
              {playListItems.map((song, index) => (
                <li
                  className="folder-history-song-list"
                  key={index}
                  onClick={() => handleSongClickSSS(song.id)}
                  id={`${song.id}-History`}
                >
                  <img src={song.img} alt={song.name} />
                  <p>{song.name}</p>
                  <p>{song.writer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="WindowThemes" className="folder folderOff">
          <div className="folder-bacg"></div>
          <div className="folder-header">
            <img className="folder-icon" src={Paint_Brush_Black} alt="" />
            <p className="folder-name">Темы</p>
            <div className="themesList">
              <img
                src={back1}
                className="themesListClass"
                id="theme1"
                onClick={Themes1}
              />
              <img
                src={back2}
                className="themesListClass"
                id="theme2"
                onClick={Themes2}
              />
              <img
                src={back3}
                className="themesListClass"
                id="theme3"
                onClick={Themes3}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Menu;
