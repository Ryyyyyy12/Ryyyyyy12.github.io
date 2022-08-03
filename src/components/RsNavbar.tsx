import { Expand, MenuRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./RsNavbar.css";

function RsNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav className="flex w-screen bg-transparent fixed m-3 items-center">
      <a>
        <img src="/assets/images/cherry.png" className="w-10 ml-2" />
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
          <Link to="#home" smooth className="no-underline text-black">
            <li className="m-2 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
              <a onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}>
                Home
              </a>
            </li>
          </Link>

          <Link to="#about" smooth className="no-underline text-black">
            <li className="m-2 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
              <a onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}>
                About
              </a>
            </li>
          </Link>

          <Link to="#project" smooth className="no-underline text-black">
            <li className="m-2 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
              <a onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}>
                Projects
              </a>
            </li>
          </Link>

          <Link to="#contact" smooth className="no-underline text-black">
            <li className="m-2 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
              <a onClick={() => (isExpanded ? setIsExpanded(!isExpanded) : "")}>
                Contact
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default RsNavbar;
