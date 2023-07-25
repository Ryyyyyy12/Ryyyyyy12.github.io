import { Grid, CardActionArea, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import ToolComponent from "./ToolComponent";
import { useTheme } from "@mui/material/styles";
function ProjectCard({ el }: any) {
  const theme = useTheme();
  return (
    <Grid item xs={12} md={3}>
      <Link
        to={`/project-detail/${el.id}`}
        style={{ textDecoration: "none", height: "100%" }}
      >
        <Card
          className={`drop-shadow-xl transition ease-in-out duration-20 hover:scale-105 border-0 ${
            theme.palette.mode === "dark"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          style={{ borderRadius: "20px" }}
        >
          <CardActionArea className="w-100">
            <div style={{ height: "25vh" }}>
              <CardMedia
                component="img"
                height="140"
                image={
                  el.coverImg ||
                  "https://www.ctvnews.ca/polopoly_fs/1.4692108.1574174140!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"
                }
                alt={el.title}
                style={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>

            <CardContent>
              <h6 className="text-lg">{el.title}</h6>
              <p className="h-10 text-slate-400 text-sm font-thin overflow-hidden overflow-ellipsis">
                <span className="block max-h-10 line-clamp-2">
                  {el.description}
                </span>
              </p>
              {ToolComponent({ tools: el.tools })}
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
export default ProjectCard;
