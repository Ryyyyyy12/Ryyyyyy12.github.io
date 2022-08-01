import React from "react";
import { Grid } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
function LogoList({ props }: any) {
  return (
    <div>
      <Grid container spacing={2}>
        {props.map((el: any) => {
          return (
            <Grid item xs={4} key={el.id} sx={{ mt: "1.5rem" }}>
              <BootstrapTooltip title={el.name}>
                <img
                  src={el.logo}
                  className="w-16 transition duration-300 ease-in-out hover:scale-125"
                ></img>
              </BootstrapTooltip>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default LogoList;
