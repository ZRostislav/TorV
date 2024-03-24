import { useState, useEffect } from "react";
import "./assets/styles/App.css";
import "./assets/styles/styleAll.css";
import "./assets/styles/stylesPlayer.css";

import Header from "./Header.tsx";
import Menu from "./Menu.tsx";
import Bck from "./Bck.tsx";
// import Testing from "./STesting.jsx";

function App() {
  const [audioData, setAudioData] = useState<number[]>([]);
  const [visionCountHeader, setVisionCountHeader] = useState(1);

  return (
    <>
      <Menu
        visionCountHeader={visionCountHeader}
        setVisionCountHeader={setVisionCountHeader}
      />
      <Header
        visionCountHeader={visionCountHeader}
        setVisionCountHeader={setVisionCountHeader}
      />

      <Bck />
      {/* <Player /> */}
    </>
  );
}

export default App;
