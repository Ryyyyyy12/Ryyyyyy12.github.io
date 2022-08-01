import { EmailRounded, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <div className="bg-cream">
      <Stack
        direction="column"
        justifyContent="center"
        spacing={1}
        sx={{ marginRight: "2.5rem" }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ padding: "1rem 2rem 0.5rem 2rem" }}
        >
          <button className="text-black no-underline">
            <span className="transition duration-300 ease-in-out hover:text-red">
              <EmailRounded /> kevalin.1246@gmail.com
            </span>
          </button>
          <Stack direction="row" spacing={2}>
            <a href="https://github.com/Ryyyyyy12" className="text-black">
              <span className="transition duration-300 ease-in-out hover:text-red">
                <GitHub />
              </span>
            </a>
            <a
              href="https://www.instagram.com/ksryyyyyy_/"
              className="text-black"
            >
              <span className="transition duration-300 ease-in-out hover:text-red">
                <Instagram />
              </span>
            </a>
            <a href="" className="text-black">
              <span className="transition duration-300 ease-in-out hover:text-red">
                <LinkedIn />
              </span>
            </a>
          </Stack>
        </Stack>
        <div className="flex justify-center">
          <p className="text-center">
            {" "}
            &copy; 2022 All rights reserved{" "}
            <span className="italic text-red">
              Designed &amp; Built by Kevalin Srisakulpong
            </span>{" "}
          </p>
        </div>
      </Stack>
    </div>
  );
}

export default Footer;
