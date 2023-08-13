import React, { useState } from "react";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();
  const [isWaving, setIsWaving] = useState(false);

  const handleMouseOver = () => {
    setIsWaving(true);
  };

  const handleMouseLeave = () => {
    setIsWaving(false);
  };

  const waveStyle = isWaving
    ? "transform rotate-[-30deg] transition-transform duration-300 ease-in-out"
    : "transition-transform duration-300 ease-in-out";

  return (
    <div
      style={{ fontFamily: "inherit", height: "100vh" }}
      className="container mx-auto flex justify-center content-center"
      id="home"
      data-aos="fade-down"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <h3
          className={`text-center transition ease-in-out delay-150 duration-300 ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          <span
            className={`hand-emoji inline-block ${waveStyle}`}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            👋
          </span>
          Hi there
        </h3>
      </Stack>
    </div>
  );
}

export default Home;
