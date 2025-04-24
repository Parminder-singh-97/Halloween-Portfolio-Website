import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true); // Set loaded to true after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);

  // If loaded, return null to hide the loading screen
  if (loaded) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-orange-500 font-halloween text-center transition-opacity duration-500">
      <img
        src="../../../icons/pumpkin.png"
        alt="Halloween"
        className="w-48 h-48 mb-6 animate-pulse drop-shadow-xl"
      />

      <div className="loader mb-4" />

      <h1 className="text-4xl animate-bounce creepster">Loading Halloween Magic...</h1>

      <style>{`
        .loader {
          border: 6px solid #f3f3f3;
          border-top: 6px solid #ff6600;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .font-halloween {
          font-family: 'Creepster', cursive;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
