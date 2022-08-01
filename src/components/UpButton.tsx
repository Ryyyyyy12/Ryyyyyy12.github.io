import { ArrowUpwardRounded } from "@mui/icons-material";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function UpButton() {
  return (
    <div className="fixed right-10 bottom-16 bg-transparent animate-bounce rounded-full border-4 border-red border-dashed  hover:border-solid">
      <button>
        <Link to="#home">
          <ArrowUpwardRounded sx={{ fontSize: "40px" }} className="text-red" />
        </Link>
      </button>
    </div>
  );
}

export default UpButton;
