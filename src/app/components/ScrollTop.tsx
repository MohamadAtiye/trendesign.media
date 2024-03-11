import React from "react";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTop: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        style={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab
          style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};
export default ScrollTop;
