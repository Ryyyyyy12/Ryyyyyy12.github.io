import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { DEV } from "../shared/projects";
import { Grid, Stack, Typography } from "@mui/material";

function ProjectDetail() {
  const theme = useTheme();
  const { id } = useParams();
  const projectId = id ? parseInt(id) : null;
  const projectData = projectId ? DEV.find((el) => el.id === projectId) : null;
  const customNames = ["Frontend", "Backend"];
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
    <div className="container pt-5 p-lg-5 ">
      <div
        className={`${
          theme.palette.mode === "dark" ? "bg-drak" : "bg-white"
        } text-${theme.palette.mode === "dark" ? "white" : "black"} `}
      >
        <div className="container p-lg-5">
          <h2 className=" text-center py-5" style={{ fontFamily: "Kanit" }}>
            {projectData.title}
          </h2>
          <Stack spacing={2} className="px-5">
            <Grid container spacing={5} className="p-md-5">
              <Grid item xs={12} sm={4} md={6}>
                <img
                  src={
                    projectData.coverImg
                      ? `.${projectData.coverImg}`
                      : "../assets/images/comingsoon.png"
                  }
                  alt={projectData.title}
                  style={{
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                  className="shadow-2xl"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                md={6}
                className="text-container p-md-5"
              >
                <Typography style={{ wordWrap: "break-word" }}>
                  {projectData.description}
                </Typography>
                <br />
                <h5>TechStack</h5>
                {projectData.tools.map((tool, index) => (
                  <div key={index} className="inline-block p-1">
                    <span
                      key={index}
                      className="inline-block border rounded-full font-thin px-2 py-1 text-xs mr-1"
                    >
                      {tool}
                    </span>
                  </div>
                ))}
              </Grid>
            </Grid>

            {projectData.info && projectData.info.res && (
              <>
                <h5>Responsibilities</h5>
                <ul className="list-disc">
                  {projectData.info.res.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              </>
            )}
          </Stack>
          <div className="container py-5 p-md-5">
            <div
              className="d-flex justify-content-center align-items-center pt-5"
              style={{ height: "100%" }}
            >
              {projectData.link.map((url, index) => (
                <a
                  key={index}
                  href={url}
                  className={`"text-black" ${
                    theme.palette.mode === "dark" ? "text-white" : "text-black"
                  }`}
                  target="_blank" // Add this attribute to open the link in a new tab
                  rel="noopener noreferrer" // Recommended for security reasons
                >
                  <button
                    className="border rounded-full border-0 bg-gray-700 w-auto h-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red duration-300 text-white"
                    style={{ marginRight: "20px" }}
                  >
                    <p
                      className="text-sm m-2 px-1"
                      style={{ fontFamily: "Kanit" }}
                    >
                      {projectData.link.length === 1
                        ? "Github Repo"
                        : `Github Repo ( ${customNames[index]} )`}
                    </p>
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
