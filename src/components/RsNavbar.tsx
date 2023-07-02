import { DarkMode, LightModeOutlined, MenuRounded } from "@mui/icons-material";
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
      <div className=" absolute right-12">
        <button
          className={`${
            theme.palette.mode === "dark" ? "text-white " : "text-black"
          } md:hidden transition ease-in-out duration-300  hover:scale-125 `}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <MenuRounded sx={{ fontSize: "30px" }} className="hover:text-red" />
        </button>
        <button
          onClick={handleColorMode}
          className="ml-5 transition ease-in-out duration-300  hover:scale-125 "
        >
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined className=" text-white text-base transition ease-in-out" />
          ) : (
            <DarkMode className="text-black  text-base transition ease-in-out " />
          )}
        </button>
      </div>
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
            className="no-underline "
          >
            <li
              className={`text-${
                theme.palette.mode === "dark" ? "lightgreen" : "green"
              } m-2 font-semibold text-base transition ease-in-out hover:text-purple duration-100`}
            >
              Resume
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default RsNavbar;
