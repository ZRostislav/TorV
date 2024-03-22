import React, { useState, useEffect } from "react";
import iTunes from "./assets/img/iTunes.png";
import Paint_Brush from "./assets/img/Paint_Brush.png";
import Time_Machine from "./assets/img/Time_Machine.png";
import Love from "./assets/img/Love.png";
import Opened_Folder from "./assets/img/Opened_Folder.png";
import Downloads_Folder from "./assets/img/Downloads_Folder.png";
import Double_Right from "./assets/img/Double_Right.png";

import Artwork from "./Artwork";

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

function Header({ visionCountHeader, setVisionCountHeader }: any) {
  // const [count, setCount] = useState(0);
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
    playList: true,
  });

  const [activeStr, setActiveStr] = useState(null);
  const [strelkaClicked, setStrelkaClicked] = useState(false);
  const [folderPowerOn, setFolderPowerOn] = useState(false);

  function simulateClick(element: any) {
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    element.dispatchEvent(event);
  }

  const handleStrelkaClick = () => {
    const drawerContainers = document.querySelectorAll(
      ".drawer-trigger-wrapper"
    );
    drawerContainers.forEach((drawerContainer) => {
      simulateClick(drawerContainer);
    });

    const selectionMenuId = document.getElementById("selectionMenuId");
    const strelkaElement = document.getElementById("strelkaId");
    const isMenuOn = strelkaElement?.classList.contains("MenuOn");

    const elements = [
      "center",
      "ramW",
      "ramWI",
      "ramWIC",
      "ramB",
      "ramBI",
      "ramBIC",
      "centerBacg",
    ];

    elements.forEach((id) => {
      const element = document.getElementById(id);
      const rawWAudioPlayers = document.getElementById("AudioPlayersW");
      const rawBAudioPlayers = document.getElementById("AudioPlayersB");
      const btnWrapper = document.querySelector(".btn-wrapper") as HTMLElement;

      if (element) {
        element.classList.remove("folderPowerOn");
        element.classList.add("folderPowerOff");
      }

      if (rawWAudioPlayers) {
        rawWAudioPlayers.classList.remove("OnW");
      }

      if (rawBAudioPlayers) {
        rawBAudioPlayers.classList.remove("OnW");
      }

      if (btnWrapper) {
        btnWrapper.classList.remove("OnW");
      }
    });

    // setStrelkaClicked((prevStrelkaClicked) => !prevStrelkaClicked);
    WindowFolder(false);
    WindowDownloads(false);
    WindowLiked(false);
    WindowHistory(false);
    WindowThemes(false);

    if (isMenuOn) {
      strelkaElement?.classList.remove("MenuOn");
      selectionMenuId?.classList.remove("MenuOn");
    } else {
      OnMenuSelection(true);
    }
  };

  const handleClick = (str: string) => {
    setActiveStr((prevStr) => {
      if (prevStr === str) {
        // Если снова нажата та же самая иконка, деактивируем её
        WindowFolder(false);
        WindowDownloads(false);
        WindowLiked(false);
        WindowHistory(false);
        WindowThemes(false);
        return null;
      } else {
        // Активируем нажатую иконку и вызываем функцию WindowFolder
        WindowFolder(str === "str4");
        WindowDownloads(str === "str5");
        WindowLiked(str === "str3");
        WindowHistory(str === "str2");
        WindowThemes(str === "str1");
        return str;
      }
    });
  };

  useEffect(() => {
    const elements = [
      "center",
      "ramW",
      "ramWI",
      "ramWIC",
      "ramB",
      "ramBI",
      "ramBIC",
      "centerBacg",
    ];
    elements.forEach((id) => {
      const element = document.getElementById(id);
      const rawWAudioPlayers = document.getElementById("AudioPlayersW");
      const rawBAudioPlayers = document.getElementById("AudioPlayersB");
      const btnWrapper = document.querySelector(".btn-wrapper") as HTMLElement;
      if (element) {
        if (activeStr) {
          element.classList.add("folderPowerOn");
          element.classList.remove("folderPowerOff");
          rawWAudioPlayers?.classList.add("OnW");
          rawBAudioPlayers?.classList.add("OnW");
          btnWrapper?.classList.add("OnW");
        } else {
          element.classList.remove("folderPowerOn");
          element.classList.add("folderPowerOff");
          rawWAudioPlayers?.classList.remove("OnW");
          rawBAudioPlayers?.classList.remove("OnW");
          btnWrapper?.classList.remove("OnW");
        }
      }
    });
  }, [activeStr]);

  useEffect(() => {
    const strelkaElement = document.getElementById("strelkaId");
    if (strelkaElement) {
      if (strelkaClicked) {
        strelkaElement.classList.add("MenuOn");
      } else {
        strelkaElement.classList.remove("MenuOn");
      }
    }
  }, [strelkaClicked]);

  function WindowFolder(activate: any) {
    const WindowFolder = document.getElementById("WindowFolder");
    if (activate) {
      CloseMenuSelection(true);
      WindowFolder?.classList.add("folderOn");
      WindowFolder?.classList.remove("folderOff");
    } else {
      WindowFolder?.classList.remove("folderOn");
      WindowFolder?.classList.add("folderOff");
    }
  }

  function WindowDownloads(activate: any) {
    const WindowDownloads = document.getElementById("WindowDownloads");
    if (activate) {
      CloseMenuSelection(true);

      WindowDownloads?.classList.add("folderOn");
      WindowDownloads?.classList.remove("folderOff");
    } else {
      WindowDownloads?.classList.remove("folderOn");
      WindowDownloads?.classList.add("folderOff");
    }
  }

  function WindowLiked(activate: any) {
    const WindowLiked = document.getElementById("WindowLiked");
    if (activate) {
      CloseMenuSelection(true);

      WindowLiked?.classList.add("folderOn");
      WindowLiked?.classList.remove("folderOff");
    } else {
      WindowLiked?.classList.remove("folderOn");
      WindowLiked?.classList.add("folderOff");
    }
  }

  function WindowHistory(activate: any) {
    const WindowHistory = document.getElementById("WindowHistory");
    if (activate) {
      CloseMenuSelection(true);
      WindowHistory?.classList.add("folderOn");
      WindowHistory?.classList.remove("folderOff");
    } else {
      WindowHistory?.classList.remove("folderOn");
      WindowHistory?.classList.add("folderOff");
    }
  }

  function WindowThemes(activate: any) {
    const WindowThemes = document.getElementById("WindowThemes");
    if (activate) {
      CloseMenuSelection(true);
      WindowThemes?.classList.add("folderOn");
      WindowThemes?.classList.remove("folderOff");
    } else {
      WindowThemes?.classList.remove("folderOn");
      WindowThemes?.classList.add("folderOff");
    }
  }

  function CloseMenuSelection(activate: any) {
    const selectionMenuId = document.getElementById("selectionMenuId");
    const strelkaElement = document.getElementById("strelkaId");
    selectionMenuId?.classList.remove("MenuOn");
    strelkaElement?.classList.remove("MenuOn");
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

  useEffect(() => {
    setInterval(() => {
      const drawerContainers = document.querySelectorAll(
        ".drawer-trigger-wrapper"
      );
      drawerContainers.forEach((drawerContainer) => {
        simulateClick(drawerContainer);
      });
    }, 1);
  }, []);

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
    <header className="header">
      <div className="blocks">
        {/* <div className="blocks-bacg"></div> */}
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
        <div id="strelkaId" className="strelka" onClick={handleStrelkaClick}>
          <div className="strelka-icon-group">
            <img
              className="strelka-icon-1"
              src={Double_Right}
              alt="Double Right Icon 1"
            />
            <img
              className="strelka-icon-2"
              src={Double_Right}
              alt="Double Right Icon 2"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
