// import React, { useState, useEffect, useRef } from "react";

// const MobileMsg = () => {
//   const [show, setShow] = useState(false);
  

//   useEffect(() => {
//     if (window.innerWidth < 768) {
//       setShow(true);
//     }
//   }, []);

 

//   if (!show) return null;

//   return (
//     <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 z-[9999] flex items-center justify-center px-6 text-center backdrop-blur-sm">
//       <div className="relative max-w-md p-6 rounded-xl border-4 border-orange-500 bg-gradient-to-b from-black via-gray-900 to-black shadow-2xl">
//         <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-4xl animate-bounce drop-shadow-[0_0_15px_rgba(255,125,0,0.9)]">
//           👻
//         </div>

//         <p className="text-orange-400 text-2xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,69,0,0.9)] font-[cursive] tracking-wider">
//           ⚠️ Desktop Required for Full Spookiness! 💻
//         </p>

//         <p className="text-purple-300 text-sm mb-6 italic drop-shadow-[0_0_5px_rgba(150,0,255,0.6)]">
//           This haunted site looks best on a larger screen... 🦇
//         </p>

//         <button
//           onClick={() => {
            
//             setShow(false);
//           }}
//           className="px-5 py-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out border border-orange-300"
//         >
//           Got it, let me in! 🎃
//         </button>

//         {/* Audio element with preload */}
//         <audio >
//           <source src="/scary-noticeMoble-sound.mp3" type="audio/mpeg" />
//           Your browser does not support the audio element.
//         </audio>
//       </div>
//     </div>
//   );
// };

// export default MobileMsg;


import React, { useState, useEffect, useRef } from "react";

const MobileMsg = () => {
  const [show, setShow] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShow(true);
    }
  }, []);
  
  const handleButtonClick = () => {
    setShow(false);
    console.log(audioRef.current)
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        // Handle error if audio doesn't play
        console.error("Audio play error:", error);
      });
    }
  };

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 z-[9999] flex items-center justify-center px-6 text-center backdrop-blur-sm">
      <div className="relative max-w-md p-6 rounded-xl border-4 border-orange-500 bg-gradient-to-b from-black via-gray-900 to-black shadow-2xl">
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-4xl animate-bounce drop-shadow-[0_0_15px_rgba(255,125,0,0.9)]">
          👻
        </div>

        <p className="text-orange-400 text-2xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,69,0,0.9)] font-[cursive] tracking-wider">
          ⚠️ Desktop Required for Full Spookiness! 💻
        </p>

        <p className="text-purple-300 text-sm mb-6 italic drop-shadow-[0_0_5px_rgba(150,0,255,0.6)]">
          This haunted site looks best on a larger screen... 🦇
        </p>

        <button
          onClick={handleButtonClick}
          className="px-5 py-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out border border-orange-300"
        >
          Got it, let me in! 🎃
        </button>

        {/* Audio element with preload */}
        <audio ref={audioRef} preload="auto">
          <source src="../../../scary-noticeMoble-sound.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default MobileMsg;
