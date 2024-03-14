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

function Header() {
  const [activeStr, setActiveStr] = useState(null);
  const [strelkaClicked, setStrelkaClicked] = useState(false);
  const [folderPowerOn, setFolderPowerOn] = useState(false);

  const handleStrelkaClick = () => {
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

  const handleClick = (str: any) => {
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
        ></div>
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
