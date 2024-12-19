import React from 'react';



import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function AudioPlayerComponent({ audioSrc, onClose }) {
  return (
    <div className="audio-player">
      <AudioPlayer
        autoPlay={false} // Adjust as needed
        src={audioSrc}
        // Other props as needed
      />
      <button onClick={onClose}>Close Audio</button>
    </div>
  );
}

export default AudioPlayerComponent;
