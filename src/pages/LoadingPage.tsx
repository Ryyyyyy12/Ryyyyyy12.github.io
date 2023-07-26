import { CircularProgress } from "@mui/material";

function LoadingPage() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <CircularProgress sx={{ color: "#C86A72" }} />
    </div>
  );
}
export default LoadingPage;
