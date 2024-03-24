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

import setSave from "./assets/img/testing/setsave.png";
import setLovers from "./assets/img/testing/setlovers.png";
import setDownload from "./assets/img/testing/setdownload.png";

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

import back1 from "./assets/img/back1.jpg";
import back2 from "./assets/img/testing/back2.jpg";
import back3 from "./assets/img/testing/back3.jpg";

import React, { useState, useEffect, useRef } from "react";
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

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Определяем src для изображения кнопки в зависимости от текущей темы и состояния isPlaying
    const playButtonSrc = isPlaying
      ? currentTheme === "theme1"
        ? Stop
        : currentTheme === "theme2"
        ? StopTheme2
        : StopTheme3
      : currentTheme === "theme1"
      ? Play
      : currentTheme === "theme2"
      ? PlayTheme2
      : PlayTheme3;

    // Обновляем src изображения кнопки
    const ramWAudioPlay = document.getElementById("ramWAudioPlay");
    if (ramWAudioPlay) {
      ramWAudioPlay.src = playButtonSrc;
    }
  }, [currentTheme, isPlaying]);

  const Themes3 = () => {
    const themi3 = document.querySelectorAll(
      ".icon-bacg, .icon-bacg2, .shil, .folder-bacg, .center-bacg, .strelka, .selectionMenu, .Bck, .barProgressWrapper, .bar-progress-wrapper, .rm-player-progress-handle, .rm-player-progress"
    );

    const ramWAudioW = document.getElementById("ramWAudioW");
    const ramAudioP = document.getElementById("ramWAudioP");

    if (ramWAudioW) {
      ramWAudioW.src = wTheme3;
    }
    if (ramAudioP) {
      ramAudioP.src = pTheme3;
    }

    themi3.forEach((themi3) => {
      themi3.classList.add("themeis3");
      themi3.classList.remove("themeis2");
    });

    setCurrentTheme("theme3");
  };

  const Themes2 = () => {
    const themi2 = document.querySelectorAll(
      ".icon-bacg, .icon-bacg2, .shil, .folder-bacg, .center-bacg, .strelka, .selectionMenu, .Bck, .barProgressWrapper, .bar-progress-wrapper, .rm-player-progress-handle, .rm-player-progress"
    );

    const ramWAudioW = document.getElementById("ramWAudioW");
    const ramAudioP = document.getElementById("ramWAudioP");

    if (ramWAudioW) {
      ramWAudioW.src = wTheme2;
    }

    if (ramAudioP) {
      ramAudioP.src = pTheme2;
    }

    themi2.forEach((themi2) => {
      themi2.classList.add("themeis2");
      themi2.classList.remove("themeis3");
    });

    setCurrentTheme("theme2");
  };

  const Themes1 = () => {
    const themi1 = document.querySelectorAll(
      ".icon-bacg, .icon-bacg2, .shil, .folder-bacg, .center-bacg, .strelka, .selectionMenu, .Bck, .barProgressWrapper, .bar-progress-wrapper, .rm-player-progress-handle, .rm-player-progress"
    );

    const ramWAudioW = document.getElementById("ramWAudioW");
    const ramAudioP = document.getElementById("ramWAudioP");

    if (ramWAudioW) {
      ramWAudioW.src = w;
    }
    if (ramAudioP) {
      ramAudioP.src = p;
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

    setIsPlaying(!isPlaying);
  };

  const ramWAudioWS = () => {
    const ramWP = document.getElementById("ramWP");
    simulateClick(ramWP);

    if (visionCountHeader === playList.length) {
      setVisionCountHeader(1); // Первый id
    } else {
      setVisionCountHeader(visionCountHeader + 1);
    }
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
    const ramBAudioLovers = ramBAudioLoversRef.current;

    // Проверка наличия элемента с id, соответствующим visionCountHeader
    const likedItem = document.getElementById(`${visionCountHeader}-Liked`);

    if (likedItem) {
      const likedItemId = likedItem.id.split("-")[0];
      // Если id совпадает с visionCountHeader, устанавливаем setLovers в качестве src
      if (likedItemId === visionCountHeader.toString()) {
        ramBAudioLovers.src = setLovers;
      } else {
        // Если id не совпадает, устанавливаем Lovers в качестве src
        ramBAudioLovers.src = Lovers;
      }
    } else if (currentTheme === "theme3") {
      ramBAudioLovers.src = LoversTheme3;
    } else if (currentTheme === "theme2") {
      ramBAudioLovers.src = LoversTheme2;
    } else {
      ramBAudioLovers.src = Lovers;
    }
  });

  useEffect(() => {
    const ramBAudioSave = ramBAudioSaveRef.current;

    // Проверка наличия элемента с id, соответствующим visionCountHeader
    const SaveItem = document.getElementById(`${visionCountHeader}-Save`);

    if (SaveItem) {
      const SaveItemId = SaveItem.id.split("-")[0];
      // Если id совпадает с visionCountHeader, устанавливаем setLovers в качестве src
      if (SaveItemId === visionCountHeader.toString()) {
        ramBAudioSave.src = setSave;
      } else {
        // Если id не совпадает, устанавливаем Lovers в качестве src
        ramBAudioSave.src = Save;
      }
    } else if (currentTheme === "theme3") {
      ramBAudioSave.src = SaveTheme3;
    } else if (currentTheme === "theme2") {
      ramBAudioSave.src = SaveTheme2;
    } else {
      ramBAudioSave.src = Save;
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

  useEffect(() => {
    const handleDownloadClick = () => {
      if (ramBAudioDownloadRef.current) {
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

        if (newDownloadImage === setDownload) {
          ramBAudioDownload.classList.add("changeSrcAnimation");
          // Удаляем класс анимации через некоторое время
          setTimeout(() => {
            ramBAudioDownload.classList.remove("changeSrcAnimation");
          }, 1000); // Время анимации в миллисекундах
        }
      }
    };

    const ramBAudioDownload = document.getElementById("ramBAudioDownload");
    if (ramBAudioDownload) {
      ramBAudioDownload.addEventListener("click", handleDownloadClick);
    }

    // Проверяем, нужно ли обновить изображение в соответствии с текущей темой
    if (ramBAudioDownloadRef.current) {
      const ramBAudioDownload = ramBAudioDownloadRef.current;
      if (!ramBAudioDownload.src.includes(setDownload)) {
        let newDownloadImage;
        if (currentTheme === "theme1") {
          newDownloadImage = Download;
        } else if (currentTheme === "theme2") {
          newDownloadImage = DownloadTheme2;
        } else if (currentTheme === "theme3") {
          newDownloadImage = DownloadTheme3;
        }
        ramBAudioDownload.src = newDownloadImage;
      }
    }

    return () => {
      if (ramBAudioDownload) {
        ramBAudioDownload.removeEventListener("click", handleDownloadClick);
      }
    };
  }, [currentTheme]);

  useEffect(() => {
    const handleLoversClick = () => {
      if (ramBAudioLoversRef.current) {
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

        if (newLoversImage === setLovers) {
          ramBAudioLovers.classList.add("changeSrcAnimation");
          // Удаляем класс анимации через некоторое время
          setTimeout(() => {
            ramBAudioLovers.classList.remove("changeSrcAnimation");
          }, 1000); // Время анимации в миллисекундах
        }
      }
    };

    const ramBAudioLovers = document.getElementById("ramBAudioLovers");
    if (ramBAudioLovers) {
      ramBAudioLovers.addEventListener("click", handleLoversClick);
    }

    // Проверяем, нужно ли обновить изображение в соответствии с текущей темой
    if (ramBAudioLoversRef.current) {
      const ramBAudioLovers = ramBAudioLoversRef.current;
      if (!ramBAudioLovers.src.includes(setLovers)) {
        let newLoversImage;
        if (currentTheme === "theme1") {
          newLoversImage = Lovers;
        } else if (currentTheme === "theme2") {
          newLoversImage = LoversTheme2;
        } else if (currentTheme === "theme3") {
          newLoversImage = LoversTheme3;
        }
        ramBAudioLovers.src = newLoversImage;
      }
    }

    return () => {
      if (ramBAudioLovers) {
        ramBAudioLovers.removeEventListener("click", handleLoversClick);
      }
    };
  }, [currentTheme]);

  useEffect(() => {
    const handleSaveClick = () => {
      if (ramBAudioSaveRef.current) {
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

        if (newSaveImage === setSave) {
          ramBAudioSave.classList.add("changeSrcAnimationS");
          // Удаляем класс анимации через некоторое время
          setTimeout(() => {
            ramBAudioSave.classList.remove("changeSrcAnimationS");
          }, 1000); // Время анимации в миллисекундах
        }
      }
    };

    const ramBAudioSave = document.getElementById("ramBAudioSave");
    if (ramBAudioSave) {
      ramBAudioSave.addEventListener("click", handleSaveClick);
    }

    // Проверяем, нужно ли обновить изображение в соответствии с текущей темой
    if (ramBAudioSaveRef.current) {
      const ramBAudioSave = ramBAudioSaveRef.current;
      if (!ramBAudioSave.src.includes(setSave)) {
        let newSaveImage;
        if (currentTheme === "theme1") {
          newSaveImage = Save;
        } else if (currentTheme === "theme2") {
          newSaveImage = SaveTheme2;
        } else if (currentTheme === "theme3") {
          newSaveImage = SaveTheme3;
        }
        ramBAudioSave.src = newSaveImage;
      }
    }

    return () => {
      if (ramBAudioSave) {
        ramBAudioSave.removeEventListener("click", handleSaveClick);
      }
    };
  }, [currentTheme]);

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
                ref={ramWAudioPlayRef}
                className="ram-w-audio-players-icons"
                onClick={() => playButton()}
                src={isPlaying ? Stop : Play} // Изображение кнопки устанавливается из useEffect
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
            <img className="folder-icon" src={Downloads_Folder_Black} alt="" />
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
