import { Box, Divider, Grid, Stack } from "@mui/material";

import { useTheme } from "@mui/material/styles";

function Aboutme() {
  const theme = useTheme();
  return (
    <div>
      <Stack>
        <Box sx={{ height: "8rem" }} id="about" />
        <div
          className="container flex justify-center content-center"
          data-aos="fade-down"
        >
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
                  src="/assets/images/profileimg.png"
                  className="w-72 rounded-full shadow-2xl"
                ></img>
              </div>
            </Grid>
            <Grid item xs={10} md={6}>
              <div className="m-2 container flex justify-center content-center">
                <p
                  className={`"text-base font-thin indent-8 leading-relaxed " ${
                    theme.palette.mode === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Welcome to my web-portfolio. My name is Kevalin Srisakulpong
                  (Cherry) , I'm a 3rd year student at King Mongkut's University
                  of Technology Thonburi , majoring in Computer Science
                  (International Program). I'm interested in web development and
                  data science. Feel free to contact me if you have any
                  questions or want to work together on something.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <Box sx={{ height: "5rem" }} />
        <div
          className={`text-base font-thin leading-relaxed container ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
          data-aos="fade-down"
        >
          <h3 className="p-5 text-md-start text-center "> 🎓 Education </h3>
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
      </Stack>
    </div>
  );
}

export default Aboutme;
