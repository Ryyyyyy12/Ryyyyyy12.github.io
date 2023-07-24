import { Box, Divider, Grid, Stack } from "@mui/material";
import { LANGUAGES, TOOLS, FRAMEWORKS } from "../shared/skills";
import LogoList from "../components/LogoList";
import { useTheme } from "@mui/material/styles";
function Aboutme() {
  const theme = useTheme();
  return (
    <div>
      <Stack>
        <Box sx={{ height: "8rem" }} id="about" />
        <div className="container flex justify-center content-center">
          <Grid
            spacing={3}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={10} md={4}>
              <div className="container flex justify-center content-center">
                <img
                  alt="profile"
                  src="./assets/images/profileimg.png"
                  className="w-72 rounded-full shadow-2xl"
                ></img>
              </div>
            </Grid>
            <Grid item xs={10} md={6}>
              <div className="m-2 container flex justify-center content-center">
                <p
                  className={`"text-base font-semibold indent-8 leading-relaxed " ${
                    theme.palette.mode === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Hello! My name is{" "}
                  <span className="text-purple underline decoration-purple decoration-2">
                    Kevalin Srisakulpong
                  </span>{" "}
                  (Cherry). I was born and raised in Bangkok, Thailand. I'm
                  currently a second-year student in the{" "}
                  <span
                    className={`${
                      theme.palette.mode === "dark"
                        ? "text-lightgreen"
                        : "text-green"
                    }`}
                  >
                    Computer-science
                  </span>{" "}
                  program at{" "}
                  <span className="text-orange-600">
                    King Mongkut's University of Technology Thonburi
                  </span>{" "}
                  (KMUTT).
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <Box sx={{ height: "5rem" }} />
        <div
          className={`"text-base font-medium leading-relaxed " ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          <h3 className="text-center md:text-left">Education</h3>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            padding={5}
          >
            <Grid item xs={12} md={3}>
              <p className="text-center">2021 - present</p>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={
                theme.palette.mode === "dark" ? "bg-white" : "bg-black"
              }
            ></Divider>
            <Grid item xs={12} md={7}>
              <p className="p-2 ml-5">
                3rd year, School of Information Technology , Computer Science
                (International Program) , King Mongkut's University of
                Technology Thonburi,{" "}
                <span className="text-orange-600">GPAX 3.66</span>
              </p>
            </Grid>
            <Grid item xs={12} md={3}>
              <p className="text-center">2017 - 2020</p>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={
                theme.palette.mode === "dark" ? "bg-white" : "bg-black"
              }
            ></Divider>
            <Grid item xs={12} md={7}>
              <p className="p-2 ml-5">
                Gifted sci-math , Satrisisuriyothai school,{" "}
                <span className="text-orange-600">GPAX 3.91</span>
              </p>
            </Grid>
          </Grid>
        </div>

        <div
          className={`${
            theme.palette.mode === "dark" ? "bg-darkblue" : "bg-cream"
          } text-base font-medium leading-relaxed pb-5 ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          <h3 className="text-center md:text-left p-5">Techs & Tools</h3>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="start"
          >
            <Grid item xs={10} md={4} lg={3}>
              <h4
                className={`m-3 text-center ${
                  theme.palette.mode === "dark" ? "text-white" : "text-black"
                }`}
                style={{ fontFamily: "Kanit" }}
              >
                Languages
              </h4>
              <LogoList props={LANGUAGES} />
            </Grid>

            <Grid item xs={10} md={4} lg={3}>
              <h4
                className={`m-3 text-center ${
                  theme.palette.mode === "dark" ? "text-white" : "text-black"
                }`}
                style={{ fontFamily: "Kanit" }}
              >
                Tools
              </h4>
              <LogoList props={TOOLS} />
            </Grid>

            <Grid item xs={10} md={4} lg={3}>
              <h4
                className={`m-3 text-center ${
                  theme.palette.mode === "dark" ? "text-white" : "text-black"
                }`}
                style={{ fontFamily: "Kanit" }}
              >
                Frameworks
              </h4>
              <LogoList props={FRAMEWORKS} />
            </Grid>
          </Grid>
        </div>
      </Stack>
    </div>
  );
}

export default Aboutme;
