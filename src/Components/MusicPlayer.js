// MusicPlayer.js
import React, { useRef } from 'react';

function MusicPlayer({ musicSource }) {
  const audioRef = useRef(null);

  const playMusic = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src={musicSource} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={playMusic}>Play</button>
    </div>
  );
}

export default MusicPlayer;
