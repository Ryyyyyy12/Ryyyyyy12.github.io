import { DarkMode, LightModeOutlined, MenuRounded } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./RsNavbar.css";
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
    <nav
      className="flex w-screen bg-transparent fixed m-3 items-center z-10"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="2400"
    >
      <Link to="/#home">
        <button>
          <img
            src="/assets/images/cherry.png"
            className="w-10 ml-2"
            alt="Logo"
          />
        </button>
      </Link>

      <div className=" absolute right-12">
        <button
          onClick={handleColorMode}
          className="transition ease-in-out duration-300  hover:scale-125 "
        >
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined className=" text-white text-base transition ease-in-out" />
          ) : (
            <DarkMode className="text-black  text-base transition ease-in-out " />
          )}
        </button>
        <button
          className={`${
            theme.palette.mode === "dark" ? "text-white " : "text-black"
          } ml-5 md:hidden transition ease-in-out duration-300  hover:scale-125 `}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <MenuRounded sx={{ fontSize: "30px" }} className="hover:text-red" />
        </button>
      </div>
      <div>
        <ul className={isExpanded ? "navExpanded" : "navNotEx"}>
          <Link
            to="/#about"
            smooth
            className={`no-underline ${
              theme.palette.mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            <li className="m-2 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
              <button
                onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}
              >
                About
              </button>
            </li>
          </Link>

          <Link
            to="/#project"
            smooth
            className={`no-underline ${
              theme.palette.mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            <li className="m-2 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
              <button
                onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}
              >
                Projects
              </button>
            </li>
          </Link>

          <Link
            to="/#contact"
            smooth
            className={`no-underline ${
              theme.palette.mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            <li className="m-2 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
              <button
                onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}
              >
                Contact
              </button>
            </li>
          </Link>

          <button
            onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}
            className="no-underline "
          >
            <li className="text-red m-2 font-semibold text-base transition ease-in-out hover:text-purple duration-100">
              Resume
            </li>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default RsNavbar;
