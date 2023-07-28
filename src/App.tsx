import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";
import RsNavbar from "./components/RsNavbar";
import Main from "./pages/Main";
import ScrollToTopButton from "./components/ToTop";
import ShineCursor from "./components/ShineCursor";
import { useEffect, useState } from "react";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <LoadingPage />;
  }

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
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
