import { useEffect, useState } from "react";
import Routers from "./Routers/Routers"; // Your main site content
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // You can adjust this breakpoint as needed

    if (isMobile) {
      // If it's a mobile device, use setTimeout
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Set a 2-second delay for mobile

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timer);
    } else {
      // If it's a desktop device, use the window load event
      const handleLoad = () => {
        setIsLoading(false);
      };

      window.addEventListener("load", handleLoad);

      // Cleanup listener on unmount
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return isLoading ? <LoadingScreen /> : <Routers />;
}

export default App;
