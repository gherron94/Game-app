import React, { useRef } from "react";
import GameMusic from "/home/sanya/Downloads/Run-Amok(chosic.com).mp3";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  return (
    <audio ref={audioRef}>
      <source src={GameMusic} />
      <div onLoad={handlePlay} />
    </audio>
  );
};

export default BackgroundMusic;
