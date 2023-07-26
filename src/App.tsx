import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";
import RsNavbar from "./components/RsNavbar";
import Main from "./pages/Main";
import ScrollToTopButton from "./components/ToTop";
import ShineCursor from "./components/ShineCursor";

function App() {
  const theme = useTheme();

  return (
    <BrowserRouter>
      <div
        className={`${
          theme.palette.mode === "dark" ? "noisyDark " : "noisyLight"
        }`}
      >
        <ShineCursor />
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <RsNavbar />
          <ScrollToTopButton />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project-detail/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
