import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { DEV } from "../shared/projects";

function ProjectDetail() {
  const theme = useTheme();
  const { id } = useParams();
  const projectId = id ? parseInt(id) : null;
  const projectData = projectId ? DEV.find((el) => el.id === projectId) : null;
  //   console.log(DEV);
  //   console.log(id);
  //   console.log(projectData);

  // Check if projectData is undefined
  if (!projectData) {
    return (
      <div className="h-screen">
        <div
          className={`${
            theme.palette.mode === "dark" ? "rainbowdark" : "rainbowlight"
          } flex justify-center align-items-center`}
        >
          <h2 className="text-white">Project Not Found...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <div
        className={`${
          theme.palette.mode === "dark" ? "rainbowdark" : "rainbowlight"
        } flex justify-center align-items-center`}
      >
        <h2 className="text-white">{projectData.title}</h2>
      </div>
    </div>
  );
}

export default ProjectDetail;
