// import React, { useRef, useState, useEffect } from "react";
// import helloweenBG from "../../assets/halloween-bg.mp3";
// import { Volume2, VolumeX } from "lucide-react";

// const BackgroundAudio = () => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(()=>{

//   if(isPlaying){
//     audioRef.current?.play()

//   }else{
//     audioRef.current?.pause();

//   }

// },[]);

//   return (
//     <>
//       <audio ref={audioRef} loop>
//         <source src={helloweenBG} type="audio/mpeg" />
//       </audio>
//       <button
//         onClick={()=>{setIsPlaying(!isPlaying)}}
//         className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center shadow-lg z-50 transition-all"
//       >
//          {isPlaying ? (
//           <Volume2 className="text-black" />
//         ) : (
//           <VolumeX className="text-black" />
//         )}
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

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;

    if (!isPlaying) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Failed to play:", err);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={helloweenBG} type="audio/mpeg" />
        Your browser does not support the audio element.
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
