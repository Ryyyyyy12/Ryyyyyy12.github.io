import { Stack } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();
  return (
    <div
      style={{ fontFamily: "Kanit", height: "100vh" }}
      className="container mx-auto flex justify-center content-center"
      id="home"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <h1
          className={`"text-5xl text-center transition ease-in-out delay-150 duration-300" ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Kevalin Srisakulpong
        </h1>
        <p
          className={`"text-base italic transition ease-in-out delay-150 duration-300" ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Welcome to my online portfolio website :)
        </p>
        <Link
          to="#about"
          smooth
          className={`"text-black" ${
            theme.palette.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          <button className="rounded-lg border-2 border-dashed border-red w-36 h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red duration-300 hover:text-white">
            <p className="text-sm mt-1">Reach out!</p>
          </button>
        </Link>
      </Stack>
    </div>
  );
}

export default Home;
