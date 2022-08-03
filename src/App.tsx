import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import UpButton from "./components/UpButton";
import Contact from "./pages/Contact";
import RsNavbar from "./components/RsNavbar";

function App() {
  return (
    <BrowserRouter>
      <div>
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
