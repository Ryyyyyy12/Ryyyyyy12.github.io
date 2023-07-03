import "./App.css";

import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import RsNavbar from "./components/RsNavbar";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  //console.log(theme.palette.mode);

  return (
    <BrowserRouter>
      <div
        className={`${
          theme.palette.mode === "dark" ? "bg-bgdark" : "bg-white"
        }`}
      >
        <RsNavbar />
        <Home />
        <Aboutme />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
