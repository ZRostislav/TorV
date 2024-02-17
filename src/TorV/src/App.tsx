import { useState } from "react";
import "./App.css";
import "./styleAll.css";

import AudioPlayer, {
  ActiveUI,
  InterfaceGridTemplateArea,
  PlayerPlacement,
  PlayListPlacement,
  ProgressUI,
  VolumeSliderPlacement,
} from "react-modern-audio-player";
import Editor from "../Editor.tsx";

import Header from "./Header.tsx";
import Menu from "./Menu.tsx";
import { playList } from "./playList.ts";
// import Testing from "./STesting.jsx";

function App() {
  const [count, setCount] = useState(0);

  const [progressType, setProgressType] = useState<ProgressUI>("bar");
  const [playerPlacement, setPlayerPlacement] =
    useState<PlayerPlacement>("bottom-left");
  const [interfacePlacement, setInterfacePlacement] =
    useState<InterfaceGridTemplateArea>();
  const [playListPlacement, setPlayListPlacement] =
    useState<PlayListPlacement>("bottom");
  const [volumeSliderPlacement, setVolumeSliderPlacement] =
    useState<VolumeSliderPlacement>();
  const [theme, setTheme] = useState<"dark" | "light" | undefined>();
  const [width, setWidth] = useState("100%");
  const [activeUI, setActiveUI] = useState<ActiveUI>({ all: true });

  return (
    <>
      <Header />
      <Menu />

      <div>
        <div className="player-container">
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

        <Editor
          setPlayerPlacement={setPlayerPlacement}
          setProgressType={setProgressType}
          setInterfacePlacement={setInterfacePlacement}
          setPlayListPlacement={setPlayListPlacement}
          setVolumeSliderPlacement={setVolumeSliderPlacement}
          setTheme={setTheme}
          setActiveUI={setActiveUI}
          setWidth={setWidth}
        />
      </div>
    </>
  );
}

export default App;
