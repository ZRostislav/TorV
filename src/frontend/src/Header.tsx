import { useState } from "react";
import iTunes from "./assets/img/iTunes.png";
import Paint_Brush from "./assets/img/Paint_Brush.png";
import Time_Machine from "./assets/img/Time_Machine.png";
import Love from "./assets/img/Love.png";
import Opened_Folder from "./assets/img/Opened_Folder.png";
import Downloads_Folder from "./assets/img/Downloads_Folder.png";
import Double_Right from "./assets/img/Double_Right.png";
import Polygon_1 from "./assets/img/Polygon 1.png";

interface StrTriggers {
  str1: boolean;
  str2: boolean;
  str3: boolean;
  str4: boolean;
  str5: boolean;
}

function Header() {
  const [strTriggers, setStrTriggers] = useState<StrTriggers>({
    str1: false,
    str2: false,
    str3: false,
    str4: false,
    str5: false,
  });

  const toggleClass = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      if (element.classList.contains("on")) {
        element.classList.remove("on");
        element.classList.add("off");
      } else {
        element.classList.remove("off");
        element.classList.add("on");
      }
    }
  };

  const handleClick = (str: keyof StrTriggers): void => {
    // Проверяем, был ли выбран str4 и folder находится в состоянии "on"
    const isStr4AndFolderOn =
      str === "str4" &&
      document.getElementById("folder")?.classList.contains("on");

    // Если текущий str уже активирован, выключаем его
    if (strTriggers[str]) {
      setStrTriggers((prevTriggers: StrTriggers) => ({
        ...prevTriggers,
        [str]: false,
      }));
      toggleClass(`str${str}`);
      return;
    }

    // Убираем folder и устанавливаем все состояния str в false
    const folder = document.getElementById("folder");
    if (folder) {
      folder.classList.remove("on");
      folder.classList.add("off");

      const elementsMenu = [
        "center",
        "ramW",
        "ramWI",
        "ramWIC",
        "ramB",
        "ramBI",
        "ramBIC",
        "centerBacg",
      ];
      elementsMenu.forEach((id) => {
        const elementMenu = document.getElementById(id);
        elementMenu.classList.remove("folderPowerOn");
        elementMenu.classList.add("folderPowerOff");
      });
    }
    setStrTriggers({
      str1: false,
      str2: false,
      str3: false,
      str4: false,
      str5: false,
    });

    // Если выбран str4 и folder находится в состоянии "on", переключаем его состояние
    if (isStr4AndFolderOn) {
      toggleClass("str4");
    }

    // Устанавливаем состояние текущего str в true и переключаем его класс
    setStrTriggers((prevTriggers: StrTriggers) => ({
      ...prevTriggers,
      [str]: true,
    }));
    toggleClass(`str${str}`);
  };

  const handleStr4Click = (): void => {
    const currentStr4State = strTriggers.str4; // Получаем текущее состояние str4

    // Инвертируем состояние str4 и устанавливаем остальные str в false
    setStrTriggers({
      str1: false,
      str2: false,
      str3: false,
      str4: !currentStr4State, // Инвертируем состояние str4
      str5: false,
    });

    const folder = document.getElementById("folder");
    if (folder) {
      // Инвертируем классы для элемента folder
      folder.classList.toggle("on");
      folder.classList.toggle("off");
    }

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
      if (element) {
        // Инвертируем классы для каждого элемента
        element.classList.toggle("folderPowerOn");
        element.classList.toggle("folderPowerOff");
      }
    });
  };

  return (
    <header className="header">
      <div className="blocks">
        <div className="blocks-bacg"></div>
        <img className="blocks-img" src={iTunes} alt="iTunes Icon" />
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
              onClick={handleStr4Click}
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
        <div className="str">
          {[1, 2, 3, 4, 5].map((num) => (
            <img
              key={`str${num}`}
              id={`str${num}`}
              className={`str-strelka ${
                strTriggers[`str${num}`] ? "on" : "off"
              }`}
              src={Polygon_1}
              alt={`Polygon ${num}`}
            />
          ))}
        </div>
      </div>

      <div className="strelka">
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
    </header>
  );
}

export default Header;
