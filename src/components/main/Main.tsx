import { useState, useEffect } from "react";
import "./styleMain.scss";
import AudioPlayer, {
  ActiveUI,
  InterfaceGridTemplateArea,
  PlayerPlacement,
  PlayListPlacement,
  ProgressUI,
  VolumeSliderPlacement,
} from "react-modern-audio-player";

import like from "../../assets/img/likeImg.png";
import base from "../../assets/img/baseImg.png";
import save from "../../assets/img/saveImg.png";

import audioPlayerInterfaceBackСontent from "../../assets/img/audioPlayerInterfaceBackСontent.png";
import audioPlayerInterfacePlaybackСontent from "../../assets/img/audioPlayerInterfacePlaybackСontent.png";
import audioPlayerInterfaceStopbackСontent from "../../assets/img/audioPlayerInterfaceStopbackСontent.png";
import audioPlayerInterfaceFurtherСontent from "../../assets/img/audioPlayerInterfaceFurtherСontent.png";
import audioPlayerInterfaceExitSample from "../../assets/img/audioPlayerInterfaceExitSample.png";

interface PlaylistItem {
  name: string;
  writer: string;
  img: string;
  src: string;
  id: number;
}

const playList = [
  {
    name: "Author music - 1",
    writer: "music - 1",
    img: "https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3",
    id: 1,
  },
  {
    name: "Author music - 2",
    writer: "music - 2",
    img: "https://cdn.pixabay.com/photo/2021/09/06/16/45/nature-6602056__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3",
    id: 2,
  },
  {
    name: "Author music - 3",
    writer: "music - 3",
    img: "https://cdn.pixabay.com/photo/2022/08/29/08/47/sky-7418364__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/03/audio_54ca0ffa52.mp3",
    id: 3,
  },
  {
    name: "Author music - 4",
    writer: "music - 4",
    img: "https://cdn.pixabay.com/photo/2015/09/22/01/30/lights-951000__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/07/25/audio_3266b47d61.mp3",
    id: 4,
  },
  {
    name: "Author music - 5",
    writer: "music - 5",
    img: "https://cdn.pixabay.com/photo/2022/08/28/18/03/dog-7417233__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3",
    id: 5,
  },
];

// const originalPlayList = [
//   {
//     name: "Author music - 1",
//     writer: "music - 1",
//     img: "https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg",
//     src: "https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3",
//     id: 1,
//   },
//   {
//     name: "Author music - 2",
//     writer: "music - 2",
//     img: "https://cdn.pixabay.com/photo/2021/09/06/16/45/nature-6602056__340.jpg",
//     src: "https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3",
//     id: 2,
//   },
//   {
//     name: "Author music - 3",
//     writer: "music - 3",
//     img: "https://cdn.pixabay.com/photo/2022/08/29/08/47/sky-7418364__340.jpg",
//     src: "https://cdn.pixabay.com/audio/2022/08/03/audio_54ca0ffa52.mp3",
//     id: 3,
//   },
//   {
//     name: "Author music - 4",
//     writer: "music - 4",
//     img: "https://cdn.pixabay.com/photo/2015/09/22/01/30/lights-951000__340.jpg",
//     src: "https://cdn.pixabay.com/audio/2022/07/25/audio_3266b47d61.mp3",
//     id: 4,
//   },
//   {
//     name: "Author music - 5",
//     writer: "music - 5",
//     img: "https://cdn.pixabay.com/photo/2022/08/28/18/03/dog-7417233__340.jpg",
//     src: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3",
//     id: 5,
//   },
//   {
//     name: "TEST NAME",
//     writer: "AFTOR TEST",
//     img: "https://cdn.pixabay.com/photo/2017/03/27/15/16/man-2179326_960_720.jpg",
//     src: "./src/test.mp3",
//     id: 6,
//   },
// ];

function Main() {
  const [progressType] = useState<ProgressUI>("bar");
  const [playerPlacement] = useState<PlayerPlacement>("static");
  const [interfacePlacement] = useState<InterfaceGridTemplateArea<1>>({});
  const [playListPlacement] = useState<PlayListPlacement>("bottom");
  const [volumeSliderPlacement] = useState<VolumeSliderPlacement>();
  const [theme] = useState<"dark" | "light" | undefined>();
  const [width] = useState("100%");
  const [activeUI] = useState<ActiveUI>({
    all: true,
  });

  const [visionCountHeader, setVisionCountHeader] = useState(0);
  const [playListLiked, setPlayListLiked] = useState<PlaylistItem[]>([]);
  const [playListBased, setPlayListBased] = useState<PlaylistItem[]>([]);
  const [playListSaved, setPlayListSaved] = useState<PlaylistItem[]>([]);
  let isSoundButtonActive = false;

  // Симулятор Клика
  function simulateClick(element: any) {
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    element.dispatchEvent(event);
  }

  // Приобразовать в Текст
  const managementText = () => {
    const titleSpan = document.querySelector(".title");
    const writerSpan = document.querySelector(".writer");
    const managementText = document.querySelector(
      ".audioPlayer__management-text"
    );

    if (titleSpan && writerSpan && managementText) {
      const title = titleSpan.textContent;
      const writer = writerSpan.textContent;

      managementText.textContent = `${writer} - ${title}`;
    } else {
      console.error("Не удалось найти один из элементов.");
    }
  };

  useEffect(() => {
    setInterval(() => {
      managementText();
    }, 100);
  });

  // Нажатие на Включение музыки и Выключение
  const InterfaceBack = () => {
    if (!isSoundButtonActive) {
      const InterfaceBack = document.getElementById("InterfaceBack");
      simulateClick(InterfaceBack);

      const barProgressElement = document.querySelector(
        ".management__bar-progress"
      ) as HTMLElement;
      barProgressElement.style.transform = `scaleX(0)`;
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [imageSrc, setImageSrc] = useState(audioPlayerInterfaceStopbackСontent);

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === " ") {
        const interfaceElement = document.getElementById("InterfacePlayback");
        simulateClick(interfaceElement);
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Чистка слушателя событий после размонтирования компонента
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    // При изменении состояния isPlaying, меняем источник изображения
    setImageSrc(
      isPlaying
        ? audioPlayerInterfaceStopbackСontent
        : audioPlayerInterfacePlaybackСontent
    );
  }, [isPlaying]);

  const InterfacePlayback = () => {
    if (!isSoundButtonActive) {
      const interfaceElement = document.getElementById("InterfacePlayback");
      simulateClick(interfaceElement);
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }
  };

  useEffect(() => {
    const InterfacePlaybackContent = document.getElementById(
      "InterfacePlaybackContent"
    ) as HTMLAudioElement;
    InterfacePlaybackContent.classList.toggle("true", isPlaying);
  });

  const InterfaceFurther = () => {
    if (!isSoundButtonActive) {
      const InterfaceFurther = document.getElementById("InterfaceFurther");
      simulateClick(InterfaceFurther);

      const barProgressElement = document.querySelector(
        ".management__bar-progress"
      ) as HTMLElement;
      barProgressElement.style.transform = `scaleX(0)`;
    }
  };

  // ID для кнопок
  useEffect(() => {
    const buttons = document.querySelectorAll(".prev-n-next-button");
    const playButton = document.querySelectorAll(".play-button");
    const repeatButton = document.querySelectorAll(".repeat-button");
    playButton.forEach(function (button) {
      button.id = "InterfacePlayback";
    });

    repeatButton.forEach(function (button) {
      button.id = "soundFunction";
    });

    buttons.forEach((button, index) => {
      if (index === 0) {
        button.id = "InterfaceBack";
      } else if (index === 1) {
        button.id = "InterfaceFurther";
      }
    });

    const spanElement = document.querySelector(
      ".track-current-time"
    ) as HTMLSpanElement;
    const pElement = document.querySelector(
      ".audioPlayer__management-timer"
    ) as HTMLParagraphElement;

    if (spanElement && pElement) {
      const updateText = () => {
        pElement.innerText = spanElement.innerText;
      };

      updateText();

      setInterval(updateText, 1000);
    } else {
      console.error("Не удалось найти элементы по указанным классам.");
    }
  }, []);

  // Бар
  const updateBarProgress = (event: MouseEvent) => {
    if (!isSoundButtonActive) {
      const audioElement = document.getElementById(
        "rm-audio-player-audio"
      ) as HTMLAudioElement;
      const barProgressElement = document.querySelector(
        ".management__bar-progress"
      ) as HTMLElement;
      const barElement = document.querySelector(
        ".management__bar"
      ) as HTMLElement;
      // Получаем ширину элемента management__bar
      const barWidth = barElement.offsetWidth;
      // Получаем позицию курсора относительно начала элемента management__bar
      const clickX = event.clientX - barElement.getBoundingClientRect().left;
      // Вычисляем значение currentTime аудио в зависимости от положения курсора
      const currentTime = (clickX / barWidth) * audioElement.duration;
      // Устанавливаем новое значение currentTime аудио
      audioElement.currentTime = currentTime;

      // Вычисляем прогресс в зависимости от текущего времени
      const progress = currentTime / audioElement.duration;
      // Устанавливаем новое значение scaleX для элемента прогресса
      barProgressElement.style.transform = `scaleX(${progress})`;
    }
  };

  useEffect(() => {
    // Добавляем обработчик события 'click' на management__bar
    const barElement = document.querySelector(
      ".management__bar"
    ) as HTMLElement;
    barElement.addEventListener("click", updateBarProgress);

    return () => {
      // Удаляем обработчик события 'click' при размонтировании компонента
      barElement.removeEventListener("click", updateBarProgress);
    };
  }, []);

  useEffect(() => {
    // Функция для обновления прогресса каждую секунду
    const updateProgressEverySecond = () => {
      const audioElement = document.getElementById(
        "rm-audio-player-audio"
      ) as HTMLAudioElement;
      const barProgressElement = document.querySelector(
        ".management__bar-progress"
      ) as HTMLElement;
      // Вычисляем прогресс в зависимости от текущего времени
      const progress = audioElement.currentTime / audioElement.duration;
      // Устанавливаем новое значение scaleX для элемента прогресса
      barProgressElement.style.transform = `scaleX(${progress})`;
    };

    // Вызываем функцию обновления прогресса каждую секунду
    const intervalId = setInterval(updateProgressEverySecond, 100);

    // Возвращаем функцию для очистки интервала при размонтировании компонента
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Кнопки Like, Base, Save
  const activateLike = () => {
    const likeElement = document.querySelector(
      ".audioPlayer__folders-like"
    ) as HTMLElement;
    const baseElement = document.querySelector(
      ".audioPlayer__folders-base"
    ) as HTMLElement;
    const saveElement = document.querySelector(
      ".audioPlayer__folders-save"
    ) as HTMLElement;
    const likeTextElement = document.querySelector(".like-text");
    const baseTextElement = document.querySelector(".base-text");
    const saveTextElement = document.querySelector(".save-text");

    // if (!likeElement.classList.contains("active")) {
    //   playList = playList.filter((item) => {
    //     return playListLiked.some((likedItem) => likedItem.id === item.id);
    //   });
    // } else {
    //   playList = originalPlayList;
    // }

    likeElement?.classList.toggle("active");
    if (likeTextElement) {
      likeTextElement.textContent = "Like";
    }

    if (baseTextElement) {
      baseTextElement.textContent = "";
      baseElement.classList.remove("active");
    }
    if (saveTextElement) {
      saveTextElement.textContent = "";
      saveElement.classList.remove("active");
    }

    if (likeElement) {
      if (!likeElement.classList.contains("active")) {
        if (likeTextElement) {
          likeTextElement.textContent = "Like";
        }
        if (baseTextElement) {
          baseTextElement.textContent = "Base";
        }
        if (saveTextElement) {
          saveTextElement.textContent = "Save";
        }
      }
    }

    const playLists = document.querySelectorAll<HTMLElement>(
      ".audioPlayer__content-container"
    );
    const playListLikes = document.querySelectorAll<HTMLElement>(
      '[id^="playListLikes"]'
    );
    const playListBases = document.querySelectorAll<HTMLElement>(
      '[id^="playListBases"]'
    );
    const playListSaves = document.querySelectorAll<HTMLElement>(
      '[id^="playListSaves"]'
    );

    playLists.forEach((playList) => {
      playList.style.display = likeElement.classList.contains("active")
        ? "none"
        : "flex";
    });

    playListLikes.forEach((playListLike) => {
      playListLike.style.display = likeElement.classList.contains("active")
        ? "flex"
        : "none";
    });

    playListBases.forEach((playListBases) => {
      playListBases.style.display = likeElement.classList.contains("active")
        ? "none"
        : "none";
    });

    playListSaves.forEach((playListSaves) => {
      playListSaves.style.display = likeElement.classList.contains("active")
        ? "none"
        : "none";
    });
  };

  const activateBase = () => {
    if (!isSoundButtonActive) {
      const likeElement = document.querySelector(
        ".audioPlayer__folders-like"
      ) as HTMLElement;
      const baseElement = document.querySelector(
        ".audioPlayer__folders-base"
      ) as HTMLElement;
      const saveElement = document.querySelector(
        ".audioPlayer__folders-save"
      ) as HTMLElement;
      const likeTextElement = document.querySelector(".like-text");
      const baseTextElement = document.querySelector(".base-text");
      const saveTextElement = document.querySelector(".save-text");

      // if (!baseElement.classList.contains("active")) {
      //   playList = playList.filter((item) => {
      //     return playListBased.some((basedItem) => basedItem.id === item.id);
      //   });
      // } else {
      //   playList = originalPlayList;
      // }

      baseElement?.classList.toggle("active");
      if (baseTextElement) {
        baseTextElement.textContent = "Base";
      }

      if (likeTextElement) {
        likeTextElement.textContent = "";
        likeElement.classList.remove("active");
      }
      if (saveTextElement) {
        saveTextElement.textContent = "";
        saveElement.classList.remove("active");
      }

      if (baseElement) {
        if (!baseElement.classList.contains("active")) {
          if (likeTextElement) {
            likeTextElement.textContent = "Like";
          }
          if (baseTextElement) {
            baseTextElement.textContent = "Base";
          }
          if (saveTextElement) {
            saveTextElement.textContent = "Save";
          }
        }
      }

      const playLists = document.querySelectorAll<HTMLElement>(
        ".audioPlayer__content-container"
      );
      const playListLikes = document.querySelectorAll<HTMLElement>(
        '[id^="playListLikes"]'
      );
      const playListBases = document.querySelectorAll<HTMLElement>(
        '[id^="playListBases"]'
      );
      const playListSaves = document.querySelectorAll<HTMLElement>(
        '[id^="playListSaves"]'
      );

      playLists.forEach((playList) => {
        playList.style.display = baseElement.classList.contains("active")
          ? "none"
          : "flex";
      });

      playListLikes.forEach((playListLike) => {
        playListLike.style.display = baseElement.classList.contains("active")
          ? "none"
          : "none";
      });

      playListBases.forEach((playListBases) => {
        playListBases.style.display = baseElement.classList.contains("active")
          ? "flex"
          : "none";
      });

      playListSaves.forEach((playListSaves) => {
        playListSaves.style.display = baseElement.classList.contains("active")
          ? "none"
          : "none";
      });
    }
  };

  const activateSave = () => {
    if (!isSoundButtonActive) {
      const likeElement = document.querySelector(
        ".audioPlayer__folders-like"
      ) as HTMLElement;
      const baseElement = document.querySelector(
        ".audioPlayer__folders-base"
      ) as HTMLElement;
      const saveElement = document.querySelector(
        ".audioPlayer__folders-save"
      ) as HTMLElement;
      const likeTextElement = document.querySelector(
        ".like-text"
      ) as HTMLElement;
      const baseTextElement = document.querySelector(
        ".base-text"
      ) as HTMLElement;
      const saveTextElement = document.querySelector(
        ".save-text"
      ) as HTMLElement;

      saveElement?.classList.toggle("active");
      if (saveTextElement) {
        saveTextElement.textContent = "Save";
      }

      if (likeTextElement) {
        likeTextElement.textContent = "";
        likeElement.classList.remove("active");
      }
      if (baseTextElement) {
        baseTextElement.textContent = "";
        baseElement.classList.remove("active");
      }

      if (saveElement) {
        if (!saveElement.classList.contains("active")) {
          if (likeTextElement) {
            likeTextElement.textContent = "Like";
          }
          if (baseTextElement) {
            baseTextElement.textContent = "Base";
          }
          if (saveTextElement) {
            saveTextElement.textContent = "Save";
          }
        }
      }

      const playLists = document.querySelectorAll<HTMLElement>(
        ".audioPlayer__content-container"
      );
      const playListLikes = document.querySelectorAll<HTMLElement>(
        '[id^="playListLikes"]'
      );
      const playListBases = document.querySelectorAll<HTMLElement>(
        '[id^="playListBases"]'
      );
      const playListSaves = document.querySelectorAll<HTMLElement>(
        '[id^="playListSaves"]'
      );

      playLists.forEach((playList) => {
        playList.style.display = saveElement.classList.contains("active")
          ? "none"
          : "flex";
      });

      playListLikes.forEach((playListLike) => {
        playListLike.style.display = saveElement.classList.contains("active")
          ? "none"
          : "none";
      });

      playListBases.forEach((playListBases) => {
        playListBases.style.display = saveElement.classList.contains("active")
          ? "none"
          : "none";
      });

      playListSaves.forEach((playListSaves) => {
        playListSaves.style.display = saveElement.classList.contains("active")
          ? "flex"
          : "none";
      });
    }
  };

  //  Работа со Звуком
  const [, setSvgVContent] = useState<SVGSVGElement | null>(null);
  const [, setSvgRContent] = useState<SVGSVGElement | null>(null);

  useEffect(() => {
    const checkAndReplaceSVG = () => {
      const volumeTriggerContainer = document.querySelector(
        ".volume-trigger-container"
      );
      const repeatButton = document.querySelector(".repeat-button");
      const svgV = volumeTriggerContainer?.querySelector("svg");
      const svgR = repeatButton?.querySelector("svg");

      if (svgV) {
        const svgVClone = svgV.cloneNode(true) as SVGSVGElement;
        const audioPlayerManagementVolume = document.querySelector(
          ".audioPlayer__management-volume"
        );
        if (audioPlayerManagementVolume) {
          audioPlayerManagementVolume.innerHTML = "";
          audioPlayerManagementVolume.appendChild(svgVClone);
        }
        setSvgVContent(svgVClone);
      }
      if (svgR) {
        const svgRClone = svgR.cloneNode(true) as SVGSVGElement;
        const audioPlayerManagementSoundFunction = document.querySelector(
          ".audioPlayer__management-soundFunction"
        );
        if (audioPlayerManagementSoundFunction) {
          audioPlayerManagementSoundFunction.innerHTML = "";
          audioPlayerManagementSoundFunction.appendChild(svgRClone);
        }
        setSvgRContent(svgRClone);
      }
    };

    const observer = new MutationObserver(checkAndReplaceSVG);

    const observeSoundFunction = () => {
      const soundFunction = document.getElementById("soundFunction");
      if (soundFunction) {
        observer.observe(soundFunction, {
          attributes: true,
          childList: true,
          subtree: true,
        });
      }
    };

    checkAndReplaceSVG();
    observeSoundFunction();
  }, []);

  const handleRepeatButtonClick = () => {
    if (!isSoundButtonActive) {
      const soundFunction = document.getElementById("soundFunction");
      if (soundFunction) {
        soundFunction.click();
      }
    }
  };

  const [volume, setVolume] = useState(1);

  const handleVolumeChange = (e: any) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    const audioElement = document.getElementById(
      "rm-audio-player-audio"
    ) as HTMLAudioElement;
    audioElement.volume = value;
  };

  useEffect(() => {
    const audioElement = document.getElementById(
      "rm-audio-player-audio"
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.volume = volume;
    }
  }, [volume]);

  const SoundButton = () => {
    // isSoundButtonActive = !isSoundButtonActive;

    const audioPlayerManagementSlider = document.getElementById("SoundSlider");
    audioPlayerManagementSlider?.classList.toggle("soundActive");

    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer?.classList.toggle("blur__2px");
    const classNames = [
      "audioPlayer__folders-like",
      "audioPlayer__folders-base",
      "audioPlayer__folders-save",
      "audioPlayer__management-soundFunction",
      "audioPlayer__interface-back",
      "audioPlayer__interface-playback",
      "audioPlayer__interface-further",
      "management__bar",
    ];

    const elements = classNames.flatMap((className) => {
      return Array.from(document.querySelectorAll(`.${className}`));
    });

    elements.forEach((element) => {
      element.classList.toggle("off");
    });
  };

  useEffect(() => {
    const Triger = document.querySelector(".drawer-trigger-wrapper");

    if (Triger) {
      Triger.classList.add("Triger");
      Triger.id = "Triger";
      simulateClick(Triger);
    }
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".list-item-root-container");
    elements.forEach((element, index) => {
      element.setAttribute("id", `Listend-${index + 1}`);
    });
  });

  const handleClickR = (liId: any) => {
    const Listened = document.getElementById(`Listend-${liId}`);
    if (Listened !== null) {
      simulateClick(Listened);
    } else {
    }
  };

  const handleClickS = (e: any) => {
    const id = e.currentTarget.id;
    const index = parseInt(id.replace(/\D/g, ""));

    setVisionCountHeader(index);
  };

  useEffect(() => {
    const audioPlayerFoldersLike = document.querySelector(
      ".audioPlayer__folders-like"
    );

    if (audioPlayerFoldersLike?.classList.contains("")) {
      const contentLike = document.getElementById("contentLike");

      const currentSong = playList.find(
        (song) => song.id === visionCountHeader
      );

      const isLiked =
        currentSong &&
        playListLiked.some((song: any) => song.id === currentSong.id);

      if (isLiked && playList.some((song) => song.id === currentSong?.id)) {
        contentLike?.classList.add("activeLike");
      } else {
        contentLike?.classList.remove("activeLike");
      }
    } else {
      const contentLike = document.getElementById("contentLike");
      const contentBase = document.getElementById("contentBase");
      const contentSave = document.getElementById("contentSave");

      contentBase?.classList.remove("activeBase");
      contentSave?.classList.remove("activeSave");
      contentLike?.classList.remove("activeLike");
    }

    const audioPlayerFoldersBase = document.querySelector(
      ".audioPlayer__folders-base"
    );

    if (audioPlayerFoldersBase?.classList.contains("")) {
      const contentBase = document.getElementById("contentBase");

      const currentSong = playList.find(
        (song) => song.id === visionCountHeader
      );

      const isBased =
        currentSong &&
        playListBased.some((song: any) => song.id === currentSong.id);

      if (isBased && playList.some((song) => song.id === currentSong?.id)) {
        contentBase?.classList.add("activeBase");
      } else {
        contentBase?.classList.remove("activeBase");
      }
    } else {
      const contentLike = document.getElementById("contentLike");
      const contentBase = document.getElementById("contentBase");
      const contentSave = document.getElementById("contentSave");

      contentBase?.classList.remove("activeBase");
      contentSave?.classList.remove("activeSave");
      contentLike?.classList.remove("activeLike");
    }

    const audioPlayerFoldersSave = document.querySelector(
      ".audioPlayer__folders-save"
    );

    if (audioPlayerFoldersSave?.classList.contains("")) {
      const contentSave = document.getElementById("contentSave");

      const currentSong = playList.find(
        (song) => song.id === visionCountHeader
      );

      const isSaved =
        currentSong &&
        playListSaved.some((song: any) => song.id === currentSong.id);

      if (isSaved && playList.some((song) => song.id === currentSong?.id)) {
        contentSave?.classList.add("activeSave");
      } else {
        contentSave?.classList.remove("activeSave");
      }
    } else {
      const contentLike = document.getElementById("contentLike");
      const contentBase = document.getElementById("contentBase");
      const contentSave = document.getElementById("contentSave");

      contentBase?.classList.remove("activeBase");
      contentSave?.classList.remove("activeSave");
      contentLike?.classList.remove("activeLike");
    }

    const audioPlayerSample = document.getElementById("Sample");
    audioPlayerSample?.classList.toggle("sampleActive");

    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer?.classList.toggle("blur__2px");

    const classNames = [
      "audioPlayer__folders-like",
      "audioPlayer__folders-base",
      "audioPlayer__folders-save",
      "audioPlayer__management-soundFunction",
      "audioPlayer__interface-back",
      "audioPlayer__interface-playback",
      "audioPlayer__interface-further",
      "management__bar",
    ];

    const elements = classNames.flatMap((className) => {
      return Array.from(document.querySelectorAll(`.${className}`));
    });

    elements.forEach((element) => {
      element.classList.toggle("off");
    });

    const playlistLikeElement = document.getElementById(
      `playListLikes-${visionCountHeader}`
    );
    const playlistBaseElement = document.getElementById(
      `playListBases-${visionCountHeader}`
    );
    const playlistSaveElement = document.getElementById(
      `playListSaves-${visionCountHeader}`
    );
    const menuListElement = document.getElementById(
      `MenuListID-${visionCountHeader}`
    );
    const contentLike = document.getElementById("contentLike");
    const contentBase = document.getElementById("contentBase");
    const contentSave = document.getElementById("contentSave");

    if (playlistLikeElement && menuListElement && contentLike) {
      contentLike.classList.add("activeLike");
    }

    if (playlistBaseElement && menuListElement && contentBase) {
      contentBase.classList.add("activeBase");
    }

    if (playlistSaveElement && menuListElement && contentSave) {
      contentSave.classList.add("activeSave");
    }

    const currentSong = playList.find((song) => song.id === visionCountHeader);

    const likedSong = playListLiked.find(
      (song) => String(song.id) === String(visionCountHeader)
    );
    const basedSong = playListBased.find(
      (song) => String(song.id) === String(visionCountHeader)
    );

    const savedSong = playListSaved.find(
      (song) => String(song.id) === String(visionCountHeader)
    );

    if (currentSong && likedSong) {
      contentLike?.classList.add("activeLike");
    }
    if (currentSong && basedSong) {
      contentBase?.classList.add("activeBase");
    }
    if (currentSong && savedSong) {
      contentSave?.classList.add("activeSave");
    }
  }, [visionCountHeader]);

  const handleClickOff = () => {
    const audioPlayerSample = document.getElementById("Sample");
    audioPlayerSample?.classList.toggle("sampleActive");

    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer?.classList.toggle("blur__2px");

    const classNames = [
      "audioPlayer__folders-like",
      "audioPlayer__folders-base",
      "audioPlayer__folders-save",
      "audioPlayer__management-soundFunction",
      "audioPlayer__interface-back",
      "audioPlayer__interface-playback",
      "audioPlayer__interface-further",
      "management__bar",
    ];

    const elements = classNames.flatMap((className) => {
      return Array.from(document.querySelectorAll(`.${className}`));
    });

    elements.forEach((element) => {
      element.classList.toggle("off");
    });
  };

  const SetLike = () => {
    const contentLike = document.getElementById("contentLike");
    contentLike?.classList.toggle("activeLike");

    const currentSong = playList.find((song) => song.id === visionCountHeader);

    if (currentSong) {
      const isAlreadyLiked = playListLiked.some(
        (song: any) => song.id === currentSong.id
      );

      if (isAlreadyLiked) {
        const updatedLikedSongs = playListLiked.filter(
          (song: any) => song.id !== currentSong.id
        );
        setPlayListLiked(updatedLikedSongs);
        localStorage.setItem(
          "playListLiked",
          JSON.stringify(updatedLikedSongs)
        );
      } else {
        const newSong = {
          id: currentSong.id,
          img: currentSong.img,
          name: currentSong.name,
          writer: currentSong.writer,
        };
        setPlayListLiked([...playListLiked, newSong] as PlaylistItem[]);
        localStorage.setItem(
          "playListLiked",
          JSON.stringify([...playListLiked, newSong] as PlaylistItem[])
        );
      }
    }
  };

  const SetBase = () => {
    const contentBase = document.getElementById("contentBase");
    contentBase?.classList.toggle("activeBase"); // Добавляем/удаляем класс "activeBase" для стилизации

    const currentSong = playList.find((song) => song.id === visionCountHeader); // Преобразуем visionCountHeader в число для сравнения с id песни

    if (currentSong) {
      const isAlreadyBased = playListBased.some(
        (song: any) => song.id === currentSong.id
      ); // Проверяем, добавлена ли песня в базу
      if (isAlreadyBased) {
        const updatedBasedSongs = playListBased.filter(
          (song: any) => song.id !== currentSong.id
        ); // Удаляем песню из базы
        setPlayListBased(updatedBasedSongs);
        localStorage.setItem(
          "playListBased",
          JSON.stringify(updatedBasedSongs)
        ); // Обновляем локальное хранилище
      } else {
        const newSong = {
          // Создаем объект новой песни для базы
          id: currentSong.id,
          img: currentSong.img,
          name: currentSong.name,
          writer: currentSong.writer,
        };

        const playListBases = document.querySelectorAll<HTMLElement>(
          '[id^="playListBases"]'
        );

        playListBases.forEach((playListBases) => {
          playListBases.style.display = "flex";
          playListBases.classList.remove("display_none");
        });
        setPlayListBased([...playListBased, newSong] as PlaylistItem[]); // Добавляем песню в базу
        localStorage.setItem(
          "playListBased",
          JSON.stringify([...playListBased, newSong] as PlaylistItem[])
        ); // Обновляем локальное хранилище
      }
    }
  };

  const SetSave = () => {
    const contentSave = document.getElementById("contentSave");
    contentSave?.classList.toggle("activeSave"); // Добавляем/удаляем класс "activeBase" для стилизации

    const currentSong = playList.find((song) => song.id === visionCountHeader); // Преобразуем visionCountHeader в число для сравнения с id песни

    if (currentSong) {
      const isAlreadySaved = playListSaved.some(
        (song: any) => song.id === currentSong.id
      ); // Проверяем, добавлена ли песня в базу
      if (isAlreadySaved) {
        const updatedSavedSongs = playListSaved.filter(
          (song: any) => song.id !== currentSong.id
        ); // Удаляем песню из базы
        setPlayListSaved(updatedSavedSongs);
        localStorage.setItem(
          "playListSaved",
          JSON.stringify(updatedSavedSongs)
        ); // Обновляем локальное хранилище
      } else {
        const newSong = {
          // Создаем объект новой песни для базы
          id: currentSong.id,
          img: currentSong.img,
          name: currentSong.name,
          writer: currentSong.writer,
        };

        const playListSaves = document.querySelectorAll<HTMLElement>(
          '[id^="playListSaves"]'
        );

        playListSaves.forEach((playListSaves) => {
          playListSaves.style.display = "flex";
          playListSaves.classList.remove("display_none");
        });
        setPlayListSaved([...playListBased, newSong] as PlaylistItem[]); // Добавляем песню в базу
        localStorage.setItem(
          "playListSaved",
          JSON.stringify([...playListBased, newSong] as PlaylistItem[])
        ); // Обновляем локальное хранилище
      }
    }
  };

  function keyPressHandler() {
    var storedPlayListLiked = localStorage.getItem("playListLiked");
    var storedPlayListBased = localStorage.getItem("playListBased");
    var storedPlayListSaved = localStorage.getItem("playListSaved");

    if (storedPlayListLiked) {
      var playListLiked = JSON.parse(storedPlayListLiked);
      setPlayListLiked(playListLiked);
    } else {
      console.log("Плейлист не найден в localStorage");
    }

    if (storedPlayListBased) {
      var playListBased = JSON.parse(storedPlayListBased);
      setPlayListBased(playListBased);
    } else {
      console.log("Плейлист не найден в localStorage");
    }

    if (storedPlayListSaved) {
      var playListSaved = JSON.parse(storedPlayListSaved);
      setPlayListSaved(playListSaved);
    } else {
      console.log("Плейлист не найден в localStorage");
    }
  }
  useEffect(() => {
    keyPressHandler();
  }, []);

  (function () {
    var elements = document.querySelectorAll(
      'div[id^="playListLikes"], div[id^="playListBases"], div[id^="playListSaves"]'
    );

    elements.forEach(function (element) {
      element.classList.add("display_none");
    });
  })();

  const Download = (itemId: any, playList: any) => {
    const song = playList.find((item: any) => item.id === itemId);
    if (song) {
      const downloadLink = document.createElement("a");
      downloadLink.href = song.src;
      downloadLink.download = `song_${itemId}.mp3`;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

      // Открываем ссылку в новом окне
      window.open(downloadLink.href, "_blank");
    } else {
      console.error("Song not found in playList");
    }
  };

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          mutation.target instanceof Element
        ) {
          const targetElement = mutation.target as HTMLElement;
          if (
            targetElement.classList.contains("audioPlayer__folders-like") ||
            targetElement.classList.contains("audioPlayer__folders-base")
          ) {
            const likeElement = document.querySelector(
              ".audioPlayer__folders-like"
            ) as HTMLElement;
            const baseElement = document.querySelector(
              ".audioPlayer__folders-base"
            ) as HTMLElement;
            const id = document.getElementById("Listend-1");

            if (
              !baseElement.classList.contains("active") &&
              !likeElement.classList.contains("active")
            ) {
              simulateClick(id);
            }
          }
        }
      }
    });

    const config = { attributes: true, subtree: true };
    observer.observe(document.body, config);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
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
      ></AudioPlayer>
      <div id="audioPlayer" className="audioPlayer">
        <div className="audioPlayer__interface">
          <div className="audioPlayer__interface-back" onClick={InterfaceBack}>
            <img src={audioPlayerInterfaceBackСontent} alt="" />
          </div>
          <div
            className="audioPlayer__interface-playback"
            onClick={() => InterfacePlayback()}
          >
            <img id="InterfacePlaybackContent" src={imageSrc} alt="" />
          </div>
          <div
            className="audioPlayer__interface-further"
            onClick={InterfaceFurther}
          >
            <img src={audioPlayerInterfaceFurtherСontent} alt="" />
          </div>
        </div>
        <div className="audioPlayer__folders">
          <div className="audioPlayer__folders-like" onClick={activateLike}>
            <img src={like} alt="" className="like__img" />
            <p className="like-text">LIKE</p>
          </div>
          <div className="audioPlayer__folders-base" onClick={activateBase}>
            <img src={base} alt="" className="base__img" />
            <p className="base-text">BASE</p>
          </div>
          <div className="audioPlayer__folders-save" onClick={activateSave}>
            <img src={save} alt="" className="save__img" />
            <p className="save-text">SAVE</p>
          </div>
        </div>
        <div className="audioPlayer__content">
          {playList.map((item, index) => (
            <div
              id={`List-${index + 1}`}
              className="audioPlayer__content-container"
              key={item.id}
              onClick={() => handleClickR(item.id)}
            >
              <div className="container__img">
                <img src={item.img} alt="" className="container__img-content" />
              </div>
              <div className="container__text">
                <p className="container__text-title">{item.name}</p>
                <p className="container__text-author">{item.writer}</p>
              </div>
              <div
                className="container__menu"
                id={`MenuListID - ${index + 1}`}
                onClick={handleClickS}
              >
                <div className="container__menu-content">
                  <span></span>
                </div>
              </div>
            </div>
          ))}
          {playListLiked.map((item) => (
            <div
              key={item.id}
              id={`playListLikes-${item.id}`}
              className="audioPlayer__content-container"
              onClick={() => handleClickR(item.id)}
            >
              <div className="container__img">
                <img src={item.img} alt="" className="container__img-content" />
              </div>
              <div className="container__text">
                <p className="container__text-title">{item.name}</p>
                <p className="container__text-author">{item.writer}</p>
              </div>
              <div
                className="container__menu"
                id={`MenuListID - ${item.id}`}
                onClick={handleClickS}
              >
                <div className="container__menu-content">
                  <span></span>
                </div>
              </div>
            </div>
          ))}
          {playListBased.map((item) => (
            <div
              key={item.id}
              id={`playListBases-${item.id}`}
              className="audioPlayer__content-container"
              onClick={() => handleClickR(item.id)}
            >
              <div className="container__img">
                <img src={item.img} alt="" className="container__img-content" />
              </div>
              <div className="container__text">
                <p className="container__text-title">{item.name}</p>
                <p className="container__text-author">{item.writer}</p>
              </div>
              <div
                className="container__menu"
                id={`MenuListID - ${item.id}`}
                onClick={handleClickS}
              >
                <div className="container__menu-content">
                  <span></span>
                </div>
              </div>
            </div>
          ))}
          {playListSaved.map((item) => (
            <div
              key={item.id}
              id={`playListSaves-${item.id}`}
              className="audioPlayer__content-container"
              onClick={() => Download(item.id, playList)}
            >
              <div className="container__img">
                <img src={item.img} alt="" className="container__img-content" />
              </div>
              <div className="container__text">
                <p className="container__text-title">{item.name}</p>
                <p className="container__text-author">{item.writer}</p>
              </div>
              <div
                className="container__menu"
                id={`MenuListID - ${item.id}`}
                onClick={handleClickS}
              >
                <div className="container__menu-content">
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="audioPlayer__management">
          <p className="audioPlayer__management-text">TEST</p>
          <div className="management__bar" onClick={() => updateBarProgress}>
            <div className="management__bar-progress"></div>
          </div>
          <div className="audioPlayer__management-footer">
            <div
              className="audioPlayer__management-soundFunction"
              onClick={handleRepeatButtonClick}
            ></div>
            <p className="audioPlayer__management-timer">00:00</p>
            <div
              className="audioPlayer__management-volume"
              onClick={SoundButton}
            ></div>
          </div>
        </div>
      </div>
      <div id="SoundSlider" className="audioPlayer__management-slider">
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
      <div id="Sample" className="audioPlayer__sample">
        <div className="audioPlayer__sample-exit" onClick={handleClickOff}>
          <img
            src={audioPlayerInterfaceExitSample}
            alt=""
            className="exit-img"
          />
        </div>
        <div className="audioPlayer__sample-content">
          <div id="contentLike" className="content__like" onClick={SetLike}>
            <img src={like} alt="" />
          </div>
          <div id="contentBase" className="content__base" onClick={SetBase}>
            <img src={base} alt="" />
          </div>
          <div id="contentSave" className="content__save" onClick={SetSave}>
            <img src={save} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
