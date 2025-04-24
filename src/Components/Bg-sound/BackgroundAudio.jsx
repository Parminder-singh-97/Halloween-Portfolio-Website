import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Start with audio paused
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false); // Update state after pause
    } else {
      audio.play().then(() => {
        setIsPlaying(true); // Update state after successful play
      }).catch((err) => {
        console.error("Error playing audio:", err);
      });
    }
  };

  return (
    <>
      {/* Background Audio using <audio> element */}
      <audio ref={audioRef} loop>
        <source src="/halloween-bg.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Play/Pause button */}
      <button
        onClick={handlePlayPause}
        className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center shadow-lg z-50 transition-all"
      >
        {isPlaying ? (
          <Volume2 className="text-black" />
        ) : (
          <VolumeX className="text-black" />
        )}
      </button>
    </>
  );
};

export default BackgroundAudio;
