import React, { useEffect, useRef, useState } from "react";

const Artwork: React.FC = () => {
  const [filteredImages, setFilteredImages] = useState<string[]>([]);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const removeImagesWithPrefix = () => {
    const images = Array.from(document.getElementsByTagName("img"));
    const prefix = "https://cdn.pixabay.com";

    const newFilteredImages = images
      .filter((img) => img.src.startsWith(prefix))
      .map((img) => img.src);

    // Проверяем, изменился ли список изображений
    if (JSON.stringify(newFilteredImages) !== JSON.stringify(filteredImages)) {
      // Если изменился, обновляем состояние
      setFilteredImages(newFilteredImages);
    }
  };

  const updateBackgroundImage = () => {
    const blocksElement = document.querySelector(".blocks");
    if (blocksElement && filteredImages.length > 0) {
      blocksElement.style.backgroundImage = `url(${filteredImages[0]})`;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      removeImagesWithPrefix();
    }, 1); // Проверка каждую секунду

    return () => clearInterval(intervalId);
  }, []); // Пустой массив зависимостей, чтобы эффект запускался только один раз при монтировании компонента

  useEffect(() => {
    updateBackgroundImage();
  }, [filteredImages]);

  return <></>;
};

export default Artwork;
