import "../src/style/style.scss";
import Main from "./components/main/Main";
import { useEffect, useState } from "react";

function App() {
  function SapmleOff() {
    const sample = document.getElementById("Sample");
    if (sample) {
      sample.classList.add("audioPlayer__sample");
      console.log("SapmleOff");
    }
  }
  useEffect(() => {
    SapmleOff();
  });

  const [backgroundImg, setBackgroundImg] = useState<string>("");

  useEffect(() => {
    // Функция для обновления фонового изображения
    const updateBackgroundImage = () => {
      const artworkContainer: HTMLElement | null =
        document.querySelector(".artwork-container");

      if (artworkContainer) {
        const img: HTMLImageElement | null =
          artworkContainer.querySelector("img");

        if (img) {
          img.id = "imgSelecting";

          setBackgroundImg(img.src);
        } else {
          console.error(
            'Изображение не найдено внутри div с классом "artwork-container"'
          );
        }
      } else {
        console.error('Элемент div с классом "artwork-container" не найден');
      }
    };

    // Обновляем изображение каждую секунду
    const intervalId = setInterval(updateBackgroundImage, 100);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (backgroundImg !== "") {
      const wrapper: HTMLElement | null = document.querySelector(".wrapper");
      if (wrapper) {
        wrapper.style.backgroundImage = `url(${backgroundImg})`;
      }
    }
  }, [backgroundImg]);

  return (
    <>
      <div className="wrapper"></div>
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
