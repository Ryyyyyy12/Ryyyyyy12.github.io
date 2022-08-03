import { Box, Grid, Stack } from "@mui/material";
import { SKILLS, TOOLS, FRAMEWORKS } from "../shared/skills";
import LogoList from "../components/LogoList";
import UpButton from "../components/UpButton";

function Aboutme() {
  return (
    <div className="bg-gradient-to-b from-transparent to-cream" id="about">
      <div className="container flex justify-center content-center">
        <Stack>
          <Box sx={{ height: "10rem" }} />
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
                    src="/assets/images/profileimg.jpg"
                    className="w-72 rounded-full shadow-2xl"
                  ></img>
                </div>
              </Grid>
              <Grid item xs={10} md={6}>
                <div className="m-2 container flex justify-center content-center">
                  <p className="text-base font-semibold indent-8 leading-relaxed ">
                    Hello! My name is{" "}
                    <span className="text-purple underline decoration-purple decoration-4">
                      Kevalin Srisakulpong
                    </span>{" "}
                    (Cherry). I was born and raised in Bangkok, Thailand. I'm
                    currently a second-year student in the{" "}
                    <span className="text-green">Computer-science</span> program
                    at{" "}
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
                <h4 className="m-3" style={{ fontFamily: "Kanit" }}>
                  Technical Skills
                </h4>
                <LogoList props={SKILLS} />
              </Grid>

              <Grid item xs={10} md={4} lg={3}>
                <h4 className="m-3" style={{ fontFamily: "Kanit" }}>
                  Tools
                </h4>
                <LogoList props={TOOLS} />
              </Grid>

              <Grid item xs={10} md={4} lg={3}>
                <h4 className="m-3" style={{ fontFamily: "Kanit" }}>
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
