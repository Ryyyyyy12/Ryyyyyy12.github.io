import {
  Grid,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

function ProjectCard({ el }: any) {
  return (
    <Grid item xs={12} md={3}>
      <Link
        to={`/project-detail/${el.id}`}
        style={{ textDecoration: "none", height: "100%" }}
      >
        <Card
          className="drop-shadow-xl transition ease-in-out duration-20 hover:scale-105 border-0"
          style={{ borderRadius: "20px" }}
        >
          <CardActionArea className="w-100">
            <CardMedia
              component="img"
              height="140"
              image="./assets/images/comingsoon.png"
              alt={el.title}
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            />
            <CardContent>
              <h6 className="text-lg text-black">{el.title}</h6>
              <p className="h-10 text-slate-400 text-sm font-thin overflow-hidden overflow-ellipsis">
                <span className="block max-h-10 line-clamp-2">
                  {el.description}
                </span>
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
export default ProjectCard;
