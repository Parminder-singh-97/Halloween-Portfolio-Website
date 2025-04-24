import React, { useState, useEffect } from "react";

const MobileMsg = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show only if screen is smaller than md (768px)
    if (window.innerWidth < 768) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-[9999] flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-white text-xl font-bold mb-4 animate-pulse">
          ⚠️ Use Desktop for Better Experience 💻
        </p>
        <button
          onClick={() => setShow(false)}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded shadow"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default MobileMsg;
