import "../App.css";
import { useTheme } from "@mui/material/styles";
function Projects() {
  const theme = useTheme();
  return (
    <div style={{ height: "100vh" }} id="project">
      <div className="container flex justify-start content-center">
        <h2
          className={
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }
        >
          Projects
        </h2>
      </div>
      <div
        className={`${
          theme.palette.mode === "dark" ? "rainbowdark" : "rainbowlight"
        } flex justify-center align-items-center`}
      >
        <h2 className="text-white">Coming soon...</h2>
      </div>
    </div>
  );
}

export default Projects;
