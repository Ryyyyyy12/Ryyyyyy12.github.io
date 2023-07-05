import { Grid } from "@mui/material";
import "../App.css";
import { useTheme } from "@mui/material/styles";

import { DEV } from "../shared/projects";
import ProjectCard from "../components/ProjectCard";
function Projects() {
  const theme = useTheme();
  return (
    <div id="project">
      <div className="container content-center">
        <h3
          className={`p-5 text-center ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Projects/Activities
        </h3>
      </div>

      <Grid
        container
        direction="row"
        justifyContent="start"
        spacing={3}
        sx={{
          padding: {
            xs: "0 15% 0 15%",
            md: "0 10% 0 10%",
          },
        }}
      >
        {DEV.map((el: any) => {
          return <ProjectCard key={el.id} el={el} />;
        })}
      </Grid>
    </div>
  );
}

export default Projects;
