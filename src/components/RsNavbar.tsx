// RsNavbar.js
import {
  DarkMode,
  DarkModeOutlined,
  LightMode,
  LightModeOutlined,
  MenuRounded,
} from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./RsNavbar.css";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./ToggleColorMode";

function RsNavbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const handleColorMode = () => {
    colorMode.toggleColorMode();
    //console.log(theme.palette.mode);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="flex w-screen bg-transparent fixed m-3 items-center">
      <a>
        <img
          src="./assets/images/cherry.png"
          className="w-10 ml-2"
          alt="Logo"
        />
      </a>
      <button
        className="absolute right-12 md:hidden transition ease-in-out duration-300 hover:text-red hover:scale-125 "
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <MenuRounded sx={{ fontSize: "30px" }} />
      </button>
      <div>
        <ul className={isExpanded ? "navExpanded" : "navNotEx"}>
          <Link
            to="#about"
            smooth
            className={`no-underline ${
              theme.palette.mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            <li className="m-2 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
              <a onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}>
                About
              </a>
            </li>
          </Link>

          <Link
            to="#project"
            smooth
            className={`no-underline ${
              theme.palette.mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            <li className="m-2 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
              <a onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}>
                Projects
              </a>
            </li>
          </Link>

          <Link
            to="#contact"
            smooth
            className={`no-underline ${
              theme.palette.mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            <li className="m-2 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
              <a onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}>
                Contact
              </a>
            </li>
          </Link>

          <a
            href=""
            onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}
            className="no-underline"
          >
            <li
              className={`text-${
                theme.palette.mode === "dark" ? "lightgreen" : "green"
              } m-2 font-semibold text-base transition ease-in-out hover:text-purple duration-100`}
            >
              Resume
            </li>
          </a>
          <IconButton sx={{ ml: 1 }} onClick={handleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? (
              <LightMode className="text-white text-base transition ease-in-out hover:text-purple duration-100" />
            ) : (
              <DarkMode className="text-black text-base transition ease-in-out hover:text-purple duration-100" />
            )}
          </IconButton>
        </ul>
      </div>
    </nav>
  );
}

export default RsNavbar;
