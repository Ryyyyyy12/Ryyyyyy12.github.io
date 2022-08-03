import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div
      style={{ fontFamily: "Kanit", height: "100vh" }}
      className="container mx-auto flex justify-center content-center"
      id="home"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <h1 className="text-5xl text-center">Kevalin Srisakulpong</h1>
        <p className="text-base italic">
          Welcome to my online portfolio website :)
        </p>
        <Link to="#about" smooth className="text-black">
          <button className="rounded-lg border-2 border-dashed border-red w-36 h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red duration-300 hover:text-white">
            <p className="text-sm mt-1">Reach out!</p>
          </button>
        </Link>
      </Stack>
    </div>
  );
}

export default Home;
