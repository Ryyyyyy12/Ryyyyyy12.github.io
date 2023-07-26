import { useState, useEffect } from "react";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Home from "./Home";
import LoadingPage from "./LoadingPage";
import Projects from "./Projects";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <Home />
      <Aboutme />
      <Projects />
      <Contact />
    </div>
  );
}
export default Main;
