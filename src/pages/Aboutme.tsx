import { Box, Grid, Stack } from "@mui/material";
import { LANGUAGES, TOOLS, FRAMEWORKS } from "../shared/skills";
import LogoList from "../components/LogoList";
import { useTheme } from "@mui/material/styles";
function Aboutme() {
  const theme = useTheme();
  return (
    <div
      className={`bg-gradient-to-b from-transparent ${
        theme.palette.mode === "dark" ? "to-bgdark" : "to-cream"
      }`}
    >
      <div className="container flex justify-center content-center">
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
                    src="./assets/images/profileimg.jpg"
                    className="w-72 rounded-full shadow-2xl"
                  ></img>
                </div>
              </Grid>
              <Grid item xs={10} md={6}>
                <div className="m-2 container flex justify-center content-center">
                  <p
                    className={`"text-base font-semibold indent-8 leading-relaxed " ${
                      theme.palette.mode === "dark"
                        ? "text-white"
                        : "text-black"
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
          <Box sx={{ height: "15rem" }}></Box>
          <div>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="start"
            >
              <Grid item xs={10} md={4} lg={3}>
                <h4
                  className={`m-3 ${
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
                  className={`m-3 ${
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
                  className={`m-3 ${
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

          <Box sx={{ height: "15rem" }}></Box>
        </Stack>
      </div>
    </div>
  );
}

export default Aboutme;
