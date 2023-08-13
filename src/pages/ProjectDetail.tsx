import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { DEV } from "../shared/projects";
import { Grid, Stack } from "@mui/material";
import { useScroll } from "../util/scroll";

function ProjectDetail() {
  useScroll();
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
        className={` text-${
          theme.palette.mode === "dark" ? "white" : "black"
        } `}
      >
        <div className="container p-lg-5">
          <h2 className=" text-center py-5">{projectData.title}</h2>
          <Stack spacing={2} className="px-5">
            <Grid container spacing={5} className="p-md-5">
              <Grid item xs={12} sm={4} md={6}>
                <img
                  src={
                    projectData.coverImg
                      ? `.${projectData.coverImg}`
                      : "https://www.ctvnews.ca/polopoly_fs/1.4692108.1574174140!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"
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
                <p className="font-thin">{projectData.description}</p>
                <br />
                <h5 className="py-3">TechStack</h5>
                {projectData.tools.map((tool, index) => (
                  <div key={index} className="inline-block p-1">
                    <span
                      key={index}
                      className={`inline-block  rounded-full font-thin px-2 py-1 text-sm mr-1 border-0 bg-${
                        theme.palette.mode === "dark" ? "gray-700" : "gray-100"
                      }`}
                    >
                      {tool}
                    </span>
                  </div>
                ))}
              </Grid>
            </Grid>

            {projectData.info && projectData.info.res && (
              <div className="container">
                <h5 className="p-3">Responsibilities</h5>
                <ul className="list-disc font-thin">
                  {projectData.info.res.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              </div>
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
                  className={`"text-black p-2  " ${
                    theme.palette.mode === "dark" ? "text-white" : "text-black"
                  }`}
                  target="_blank" // Add this attribute to open the link in a new tab
                  rel="noopener noreferrer" // Recommended for security reasons
                >
                  <button className="rounded-full bg-gray-700 w-auto h-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red duration-300 text-white">
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
