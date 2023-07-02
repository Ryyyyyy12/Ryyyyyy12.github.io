import { EmailRounded, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Stack } from "@mui/material";

function Footer() {
  return (
    <div className="bg-cream w-screen">
      <Stack
        direction="column"
        justifyContent="center"
        spacing={1}
        sx={{ padding: "0.5rem", paddingTop: "1rem" }}
      >
        <Stack direction="row" justifyContent="center" spacing={2}>
          <button className="hidden md:inline text-black no-underline">
            <span className="transition duration-300 ease-in-out hover:text-red">
              <EmailRounded /> <p className="inline">kevalin.1246@gmail.com</p>
            </span>
          </button>

          <a href="https://github.com/Ryyyyyy12" className="text-black">
            <span className="transition duration-300 ease-in-out hover:text-red">
              <GitHub />
            </span>
          </a>
          <a href="https://www.instagram.com/" className="text-black">
            <span className="transition duration-300 ease-in-out hover:text-red">
              <Instagram />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/kevalin-srisakulpong-63826127b/"
            className="text-black"
          >
            <span className="transition duration-300 ease-in-out hover:text-red">
              <LinkedIn />
            </span>
          </a>
        </Stack>
        <div className="md:hidden">
          <p className="text-center">kevalin.1246@gmail.com</p>
        </div>
        <div>
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
