// import React, { useRef, useState } from "react";

// const BackgroundAudio = () => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const toggleAudio = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <>
//       <audio ref={audioRef} loop autoPlay >
//         <source src="../../../halloween-bg.mp3" type="audio/mpeg" />
//       </audio>
//       <button onClick={toggleAudio} className="bg-orange-500 text-black px-4 py-2 rounded shadow mt-4">
//         {isPlaying ? "Pause Music" : "Play Music"}
//       </button>
//     </>
//   );
// };

// export default BackgroundAudio;






import React, { useRef, useState, useEffect } from "react";
import helloweenBG from "../../assets/halloween-bg.mp3";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.02; // 🔈 Set minimal volume (5%)
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={helloweenBG} type="audio/mpeg" />
      </audio>
      <button
        onClick={toggleAudio}
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
