import {
  AppBar,
  Box,
  Toolbar,
  Stack,
  Tab,
  Tabs,
  ButtonGroup,
  Button,
  Divider,
} from "@mui/material";
import * as React from "react";

import { Container } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  return (
    <nav className="bg-transparent fixed m-3" style={{ width: "95vw" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <img
          src="https://images.emojiterra.com/mozilla/512px/1f352.png"
          className="w-8 ml-2"
        />
        <Stack direction="row" spacing={2}>
          <button>
            <Link to="#home" smooth className="no-underline text-black">
              <p className="m-1 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
                Home
              </p>
            </Link>
          </button>
          <button>
            <Link to="#about" smooth className="no-underline text-black">
              <p className="m-1 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
                About
              </p>
            </Link>
          </button>
          <button>
            <Link to="#project" smooth className="no-underline text-black">
              <p className="m-1 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
                Projects
              </p>
            </Link>
          </button>
          <button>
            <Link to="#contact" smooth className="no-underline text-black">
              <p className="m-1 font-semibold text-base transition ease-in-out hover:text-red hover:underline underline-offset-8 decoration-wavy duration-300">
                Contact
              </p>
            </Link>
          </button>
        </Stack>
      </Stack>
    </nav>
  );
};
export default Navbar;
