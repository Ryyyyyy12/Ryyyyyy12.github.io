import { EmailRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function Footer() {
  const theme = useTheme();
  return (
    <div
      className={`w-screen ${
        theme.palette.mode === "dark" ? "bg-darkblue" : "bg-cream"
      }`}
    >
      <Stack
        direction="column"
        justifyContent="center"
        spacing={1}
        sx={{ padding: "0.5rem", paddingTop: "1rem" }}
        className={theme.palette.mode === "dark" ? "text-white" : "text-black"}
      >
        <Stack direction="row" justifyContent="center" spacing={2}>
          <button className="hidden md:inline no-underline">
            <span className="transition duration-300 ease-in-out hover:text-red">
              <EmailRounded /> <p className="inline">kevalin.1246@gmail.com</p>
            </span>
          </button>

          <a
            href="https://github.com/Ryyyyyy12"
            className={
              theme.palette.mode === "dark" ? "text-white" : "text-black"
            }
          >
            <span className="transition duration-300 ease-in-out hover:text-red">
              <GitHub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/kevalin-srisakulpong-63826127b/"
            className={
              theme.palette.mode === "dark" ? "text-white" : "text-black"
            }
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
            &copy; All rights reserved{" "}
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
