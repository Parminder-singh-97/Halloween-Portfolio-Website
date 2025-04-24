import { useEffect, useState } from "react";
import Routers from "./Routers/Routers";// Your main site content
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Wait until all files (images, fonts, etc.) are loaded
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return isLoading ? <LoadingScreen /> : <Routers/>;
}

export default App;
