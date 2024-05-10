import "./styleMain.scss";

import Paint_Brush from "../../assets/img/Paint_Brush.png";
import Time_Machine from "../../assets/img/Time_Machine.png";
import Love from "../../assets/img/Love.png";
import Downloads_Folder from "../../assets/img/Downloads_Folder.png";

import Artwork from "../../Artwork";

import AudioPlayer, {
  ActiveUI,
  InterfaceGridTemplateArea,
  PlayerPlacement,
  PlayListPlacement,
  ProgressUI,
  VolumeSliderPlacement,
} from "react-modern-audio-player";
import { playList } from "../../playList.ts";

import Opened_Folder from "../../assets/img/Opened Folder.png";

import Downloads_Folder_Black from "../../assets/img/Downloads_Folder_Black.png";
import Love_black from "../../assets/img/Love_black.png";

import Save from "../../assets/img/testing/save.png";
import Lovers from "../../assets/img/testing/lovers.png";
import Download from "../../assets/img/testing/download.png";

import setSave from "../../assets/img/testing/setsave.png";
import setLovers from "../../assets/img/testing/setlovers.png";
import setDownload from "../../assets/img/testing/setdownload.png";

import SaveTheme2 from "../../assets/img/testing/saveTheme2.png";
import LoversTheme2 from "../../assets/img/testing/loversTheme2.png";
import DownloadTheme2 from "../../assets/img/testing/downloadTheme2.png";

import SaveTheme3 from "../../assets/img/testing/saveTheme3.png";
import LoversTheme3 from "../../assets/img/testing/loversTheme3.png";
import DownloadTheme3 from "../../assets/img/testing/downloadTheme3.png";

import React, { useState, useEffect, useRef } from "react";

interface PlaylistItem {
  id: string;
  img: string;
  name: string;
  writer: string;
}

function Main({ visionCountHeader, setVisionCountHeader }: any) {
  const ramBAudioLoversRef = useRef<HTMLImageElement>(null);
  const ramBAudioDownloadRef = useRef<HTMLImageElement>(null);
  const ramBAudioSaveRef = useRef<HTMLImageElement>(null);
  const ramWAudioPlayRef = useRef<HTMLImageElement>(null);
  const [likedSongs, setLikedSongs] = useState<PlaylistItem[]>([]);
  const [DownloadSongs, setDownloadSongs] = useState<PlaylistItem[]>([]);
  const [SaveSongs, setSaveSongs] = useState<PlaylistItem[]>([]);
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

  const handleSongClickSSS = (songId: string) => {
    const idStringSSid = songId; // Формируем id элемента списка истории песен
    const listElementSSS = document.getElementById(idStringSSid);
    if (listElementSSS) {
      simulateClick(listElementSSS); // Передаем найденный элемент в функцию simulateClick
    }
  };

  const handleSongClickSSSS = (songId, playList) => {
    const song = playList.find((item) => item.id === songId);
    if (song) {
      const downloadLink = document.createElement("a");
      downloadLink.href = song.src;
      downloadLink.download = `song_${songId}.mp3`;
      downloadLink.style.display = "none";
      // Установим target в _blank, чтобы открыть ссылку в новой вкладке
      downloadLink.target = "_blank";
      document.body.appendChild(downloadLink);

      // Создаём обработчик события, который удаляет ссылку после скачивания файла
      const removeLink = () => {
        document.body.removeChild(downloadLink);
        window.removeEventListener("focus", removeLink);
      };

      // Добавляем обработчик события, чтобы убедиться, что ссылка удаляется после скачивания файла
      window.addEventListener("focus", removeLink);

      // Создаём и симулируем клик по ссылке
      const clickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      downloadLink.dispatchEvent(clickEvent);
    } else {
      console.error("Song not found in playList");
    }
  };

  const [playListItems, setPlayListItems] = useState<PlaylistItem[]>([]);

  useEffect(() => {
    const ramBAudioDownload = ramBAudioDownloadRef.current;

    // Проверка наличия элемента с id, соответствующим visionCountHeader
    const DownloadItem = document.getElementById(
      `${visionCountHeader}-Download`
    );

    if (DownloadItem) {
      const DownloadItemId = DownloadItem.id.split("-")[0];
      // Если id совпадает с visionCountHeader, устанавливаем setLovers в качестве src
      if (DownloadItemId === visionCountHeader.toString()) {
        ramBAudioDownload.src = setDownload;
      } else {
        // Если id не совпадает, устанавливаем Lovers в качестве src
        ramBAudioDownload.src = Download;
      }
    } else if (currentTheme === "theme3") {
      ramBAudioDownload.src = DownloadTheme3;
    } else if (currentTheme === "theme2") {
      ramBAudioDownload.src = DownloadTheme2;
    } else {
      ramBAudioDownload.src = Download;
    }
  });

  useEffect(() => {
    const bar = document.querySelectorAll(".bar-progress-wrapper");
    const buttons = document.querySelectorAll(".prev-n-next-button");
    const playButton = document.querySelectorAll(".play-button");
    playButton.forEach(function (button) {
      // Set the id attribute of each playButton element to "playB"
      button.id = "playB";
    });
    bar.forEach(function (button) {
      // Set the id attribute of each playButton element to "playB"
      button.id = "barProgressWrapper";
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

  const handleLoversClick = () => {
    // Получение текущей песни на основе visionCountHeader
    const currentSong = playList.find((song) => song.id === visionCountHeader);

    // Проверка, что такая песня найдена
    if (currentSong) {
      // Проверяем, содержится ли текущая песня уже в списке понравившихся песен
      const isAlreadyLiked = likedSongs.some(
        (song) => song.id === currentSong.id
      );

      // Если текущая песня уже есть в списке понравившихся песен, удаляем её
      if (isAlreadyLiked) {
        const updatedLikedSongs = likedSongs.filter(
          (song) => song.id !== currentSong.id
        );
        setLikedSongs(updatedLikedSongs);
      } else {
        // Создание нового объекта для элемента <li> на основе текущей песни
        const newSong = {
          id: currentSong.id,
          img: currentSong.img,
          name: currentSong.name,
          writer: currentSong.writer,
        };

        // Добавление новой песни в список понравившихся песен
        setLikedSongs([...likedSongs, newSong]);
      }
    }

    const ramBAudioLoversS = document.getElementById("ramBAudioLovers");
    ramBAudioLoversS.src = setLovers;
    const ramBAudioLovers = ramBAudioLoversRef.current;
    // Проверяем, какое изображение в настоящее время отображается
    const isSetLovers = ramBAudioLovers.src.includes(setLovers);
    let newLoversImage;
    // Определяем новое изображение в зависимости от текущей темы
    if (isSetLovers) {
      if (currentTheme === "theme1") {
        newLoversImage = Lovers;
      } else if (currentTheme === "theme2") {
        newLoversImage = LoversTheme2;
      } else if (currentTheme === "theme3") {
        newLoversImage = LoversTheme3;
      }
    } else {
      // Если текущее изображение не setLovers, то устанавливаем его в setLovers
      newLoversImage = setLovers;
    }
    // Присваиваем новое изображение
    ramBAudioLovers.src = newLoversImage;
  };

  const handleLDownloadClick = () => {
    // Получение текущей песни на основе visionCountHeader
    const currentSong = playList.find((song) => song.id === visionCountHeader);

    // Проверка, что такая песня найдена
    if (currentSong) {
      // Проверяем, содержится ли текущая песня уже в списке понравившихся песен
      const isAlreadyDownload = DownloadSongs.some(
        (song) => song.id === currentSong.id
      );

      // Если текущая песня уже есть в списке понравившихся песен, удаляем её
      if (isAlreadyDownload) {
        const updatedDownloadSongs = DownloadSongs.filter(
          (song) => song.id !== currentSong.id
        );
        setDownloadSongs(updatedDownloadSongs);
      } else {
        // Создание нового объекта для элемента <li> на основе текущей песни
        const newSong = {
          id: currentSong.id,
          img: currentSong.img,
          name: currentSong.name,
          writer: currentSong.writer,
        };

        // Добавление новой песни в список понравившихся песен
        setDownloadSongs([...DownloadSongs, newSong]);
      }
    }

    const ramBAudioDownloadS = document.getElementById("ramBAudioDownload");
    ramBAudioDownloadS.src = setDownload;
    const ramBAudioDownload = ramBAudioDownloadRef.current;
    // Проверяем, какое изображение в настоящее время отображается
    const isSetDownload = ramBAudioDownload.src.includes(setDownload);
    let newDownloadImage;
    // Определяем новое изображение в зависимости от текущей темы
    if (isSetDownload) {
      if (currentTheme === "theme1") {
        newDownloadImage = Download;
      } else if (currentTheme === "theme2") {
        newDownloadImage = DownloadTheme2;
      } else if (currentTheme === "theme3") {
        newDownloadImage = DownloadTheme3;
      }
    } else {
      // Если текущее изображение не setLovers, то устанавливаем его в setLovers
      newDownloadImage = setDownload;
    }
    // Присваиваем новое изображение
    ramBAudioDownload.src = newDownloadImage;
  };

  const handleLSaveClick = () => {
    // Получение текущей песни на основе visionCountHeader
    const currentSong = playList.find((song) => song.id === visionCountHeader);

    // Проверка, что такая песня найдена
    if (currentSong) {
      // Проверяем, содержится ли текущая песня уже в списке понравившихся песен
      const isAlreadySave = SaveSongs.some(
        (song) => song.id === currentSong.id
      );

      // Если текущая песня уже есть в списке понравившихся песен, удаляем её
      if (isAlreadySave) {
        const updatedSaveSongs = SaveSongs.filter(
          (song) => song.id !== currentSong.id
        );
        setSaveSongs(updatedSaveSongs);
      } else {
        // Создание нового объекта для элемента <li> на основе текущей песни
        const newSong = {
          id: currentSong.id,
          img: currentSong.img,
          name: currentSong.name,
          writer: currentSong.writer,
        };

        // Добавление новой песни в список понравившихся песен
        setSaveSongs([...SaveSongs, newSong]);
      }
    }

    const ramBAudioSaveS = document.getElementById("ramBAudioSave");
    ramBAudioSaveS.src = setSave;
    const ramBAudioSave = ramBAudioSaveRef.current;
    // Проверяем, какое изображение в настоящее время отображается
    const isSetSave = ramBAudioSave.src.includes(setSave);
    let newSaveImage;
    // Определяем новое изображение в зависимости от текущей темы
    if (isSetSave) {
      if (currentTheme === "theme1") {
        newSaveImage = Save;
      } else if (currentTheme === "theme2") {
        newSaveImage = SaveTheme2;
      } else if (currentTheme === "theme3") {
        newSaveImage = SaveTheme3;
      }
    } else {
      // Если текущее изображение не setLovers, то устанавливаем его в setLovers
      newSaveImage = setSave;
    }
    // Присваиваем новое изображение
    ramBAudioSave.src = newSaveImage;
  };

  const [strelkaClicked, setStrelkaClicked] = useState(false);

  function simulateClick(element: any) {
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    element.dispatchEvent(event);
  }

  function OnMenuSelection(activate: any) {
    const selectionMenuId = document.getElementById("selectionMenuId");
    const strelkaElement = document.getElementById("strelkaId");
    selectionMenuId?.classList.add("MenuOn");
    strelkaElement?.classList.add("MenuOn");
  }

  function addIdsToElements() {
    const elements = document.querySelectorAll(".list-item-root-container");
    elements.forEach((element, index) => {
      element.setAttribute("id", `ListList-${index + 1}`);
    });
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     const drawerContainers = document.querySelectorAll(
  //       ".drawer-trigger-wrapper"
  //     );
  //     drawerContainers.forEach((drawerContainer) => {
  //       simulateClick(drawerContainer);
  //     });
  //   }, 10000);
  // }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      addIdsToElements();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClickS = (liId: string | number) => {
    // Преобразуем liId в строку
    const idString = liId.toString();
    // Извлекаем порядковый номер из id элемента списка li
    const liIndex = parseInt(idString.substring(idString.lastIndexOf("-") + 1));
    // Формируем id элемента с ListList-
    const listId = `ListList-${liIndex}`;
    // Находим элемент с нужным id
    const listElement = document.getElementById(listId);

    const elementsWithWhiteClass = document.querySelectorAll(".White");
    elementsWithWhiteClass.forEach((element) => {
      element.classList.remove("White");
    });

    const SlistElement = document.getElementById(liId.toString());
    if (SlistElement) {
      SlistElement.classList.add("White");
      if (listElement) {
        simulateClick(listElement);
      }
    }

    setVisionCountHeader(liId);
  };

  return (
    <>
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
            <div id="ramB" className="ram-b folderPowerOff">
              <div id="AudioPlayersB" className="ram-b-audio-players">
                <img
                  id="ramBAudioSave"
                  onClick={handleLSaveClick}
                  ref={ramBAudioSaveRef}
                  className="ram-b-audio-players-icons"
                  src={Save}
                  alt=""
                />
                <img
                  id="ramBAudioLovers"
                  onClick={handleLoversClick}
                  ref={ramBAudioLoversRef}
                  className="ram-b-audio-players-icons"
                  src={Lovers}
                  alt=""
                />
                <img
                  id="ramBAudioDownload"
                  onClick={handleLDownloadClick}
                  ref={ramBAudioDownloadRef}
                  className="ram-b-audio-players-icons"
                  src={Download}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div id="WindowFolder" className="folder folderOff">
            <div className="folder-bacg"></div>
            <div className="folder-header">
              <img className="folder-icon" src={Opened_Folder} alt="" />
              <p className="folder-name">Сохраненные</p>
              <ul className="folder-Save-song">
                {SaveSongs.map((song, index) => (
                  <li
                    className="folder-Save-song-list"
                    key={index}
                    onClick={() => handleSongClickSSS(song.id)}
                    id={`${song.id}-Save`}
                  >
                    <img src={song.img} alt={song.name} />
                    <p>{song.name}</p>
                    <p>{song.writer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="WindowDownloads" className="folder folderOff">
            <div className="folder-bacg"></div>
            <div className="folder-header">
              <img
                className="folder-icon"
                src={Downloads_Folder_Black}
                alt=""
              />
              <ul className="folder-Download-song">
                {DownloadSongs.map((song, index) => (
                  <li
                    className="folder-Download-song-list"
                    key={index}
                    onClick={() => handleSongClickSSSS(song.id, playList)}
                    id={`${song.id}-Download`}
                  >
                    <img src={song.img} alt={song.name} />
                    <p>{song.name}</p>
                    <p>{song.writer}</p>
                  </li>
                ))}
              </ul>
              <p className="folder-name">Загрузки</p>
            </div>
          </div>

          <div id="WindowLiked" className="folder folderOff">
            <div className="folder-bacg"></div>
            <div className="folder-header">
              <img className="folder-icon" src={Love_black} alt="" />
              <p className="folder-name">Понравившиеся</p>
              <ul className="folder-Liked-song">
                {likedSongs.map((song, index) => (
                  <li
                    className="folder-Liked-song-list"
                    key={index}
                    onClick={() => handleSongClickSSS(song.id)}
                    id={`${song.id}-Liked`}
                  >
                    <img src={song.img} alt={song.name} />
                    <p>{song.name}</p>
                    <p>{song.writer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <div className="blocks">
        <Artwork />
      </div>
      <div className="shil">
        <div className="icon">
          <div className="icon1">
            <img
              onClick={() => handleClick("str1")}
              className="icon-icon"
              src={Paint_Brush}
              alt="Basket Icon"
            />
            <div className="icon-bacg">
              <div className="icon-bacg2"></div>
            </div>
          </div>

          <div className="icon2">
            <img
              onClick={() => handleClick("str2")}
              className="icon-icon"
              src={Time_Machine}
              alt="Time Machine Icon"
            />
            <div className="icon-bacg">
              <div className="icon-bacg2"></div>
            </div>
          </div>

          <div className="icon3">
            <img
              onClick={() => handleClick("str3")}
              className="icon-icon"
              src={Love}
              alt="Love Icon"
            />
            <div className="icon-bacg">
              <div className="icon-bacg2"></div>
            </div>
          </div>

          <div className="icon4">
            <img
              onClick={() => handleClick("str4")}
              className="icon-icon"
              src={Opened_Folder}
              alt="Opened Folder Icon"
            />
            <div className="icon-bacg">
              <div className="icon-bacg2"></div>
            </div>
          </div>

          <div className="icon5">
            <img
              onClick={() => handleClick("str5")}
              className="icon-icon"
              src={Downloads_Folder}
              alt="Downloads Folder Icon"
            />
            <div className="icon-bacg">
              <div className="icon-bacg2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="musiсSelectionMenu">
        <div
          id="selectionMenuId"
          className={`selectionMenu${strelkaClicked ? " MenuOn" : ""}`}
        >
          <ul className="SelectionMenu__UL">
            {playList.map((song) => (
              <li
                className="SelectionMenu__LI"
                key={song.id}
                id={song.id}
                onClick={() => handleClickS(song.id)}
              >
                <img
                  className="SelectionMenu__IMG"
                  src={song.img}
                  alt={song.name}
                />
                <p className="SelectionMenu__NAME">{song.name}</p>
                <p className="SelectionMenu__WRITER">{song.writer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
