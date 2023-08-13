import { Grid } from "@mui/material";
import "../App.css";
import { useTheme } from "@mui/material/styles";

import { DEV } from "../shared/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const theme = useTheme();

  return (
    <div id="project" data-aos="fade-down">
      <div className="container p-5">
        <h3
          className={`text-md-start text-center ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          📌 Projects
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
            lg: "0 15% 0 15%",
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
